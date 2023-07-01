// SwipableCards.js
import React, { useRef, useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Animated,
    PanResponder,
    Text,
    Dimensions,
} from 'react-native';
import clamp from 'clamp';
import Card from './Card';
import { ThemedButton } from 'react-native-really-awesome-button';
import BackgroundMain from './BackgroundMain';
import LottieView from 'lottie-react-native';
import swipeLeftAnimation from '../../assets/animations/swipeLeft.json';
import swipeRightAnimation from '../../assets/animations/swipeRight.json';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('screen');
const SWIPE_THRESHOLD = 0.25 * width;

const SwipableCards = ({ cards,setCards, renderAdditionalComponent, type}) => {
    const animation = useRef(new Animated.ValueXY()).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(0.9)).current;
    const lottieOpacity = useRef(new Animated.Value(1)).current;
    const lottieRef = useRef(null);

    const [currentAnimation, setCurrentAnimation] = useState(swipeLeftAnimation);
    const [timer,showTimer] = useState(false);
    const _panResponder = useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: (event, gesture) => {
            animation.setValue({ x: gesture.dx, y: gesture.dy });
            fadeOutLottie(true);

          },
          onPanResponderRelease: (e, { dx, dy, vx, vy }) => {
            let velocity;
            if (vx >= 0) {
              velocity = clamp(vx, 4, 5);
            } else if (vx < 0) {
              velocity = clamp(Math.abs(vx), 4, 5) * -1;
            }
            if (Math.abs(dx) > SWIPE_THRESHOLD) {
              Animated.parallel([
                Animated.decay(animation, {
                  velocity: { x: velocity, y: vy },
                  deceleration: 0.99,
                  useNativeDriver: false,
                }),
                Animated.spring(scale, {
                  toValue: 1,
                  friction: 4,
                  useNativeDriver: false,
                }),
              ]).start(transitionNext);
              if (velocity > 0) {
                //handleRightDecay();
              } else {
                //handleLeftDecay();
              }
            } else {
              Animated.spring(animation, {
                toValue: { x: 0, y: 0 },
                friction: 4,
                useNativeDriver: false,
              }).start();
            }
          },
          onPanResponderGrant: () => {
            fadeOutLottie(true);
          },

          
        })
    ).current;
    const fadeAnim = useRef(new Animated.Value(1)).current;  // Initial value for opacity: 1

    const fadeIn = () => {
      // Will change fadeAnim value to 1 in 2 seconds
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => setTimeout(fadeOut, 1000)); // Starts the animation and calls fadeOut after a 1 second delay
    };
  
    const fadeOut = () => {
      // Will change fadeAnim value to 0 in 2 seconds
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      }).start(() => setTimeout(fadeIn, 1000)); // Starts the animation and calls fadeIn after a 1 second delay
    };

    const fadeInLottie = () => {
      Animated.timing(lottieOpacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start( );
    };
    
    const fadeOutLottie = (stop=false) => {
      Animated.timing(lottieOpacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start(
        () => {
          if(stop){
            if (lottieRef.current)
              lottieRef.current.pause()
          }
        }
      );
    };

    const toggleAnimation = () => {
      Animated.timing(lottieOpacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          setCurrentAnimation(
            currentAnimation === swipeLeftAnimation
              ? swipeRightAnimation
              : swipeLeftAnimation
          );
          fadeInLottie();
        }, 500); // 1000ms delay
      });
    };  

    
    const transitionNext = function () {
        Animated.parallel([
          Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
            useNativeDriver: false,
          }),
          Animated.spring(scale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: false,
          }),
        ]).start(() => {
          setCards((cards) => {
            return cards.slice(1)
          });
        });
     };
  
    const shuffle = () => {
        setCards((cards) => {
          return cartas.sort(() => Math.random() - 0.5);
        });
    }

    useEffect(() => {
        fadeIn();
    }, []);

    useEffect(() => {
        scale.setValue(0.9);
        opacity.setValue(1);
        animation.setValue({ x: 0, y: 0 });
    }, [cards]);
    
  return (
      <View style={styles.container}>

        <BackgroundMain/>
        {
          type === "infiltrate"?
            <>
              <Text style={[styles.bgInfiltrateText, {textAlign: "center"}]}>Las cartas estan repartidas.</Text>
              <Text style={styles.bgInfiltrateText}>En la siguiente fase cada jugador debe decir la palabra relacionada y luego deberan hacer la votacion</Text>
              <ThemedButton  name="bruce" type="primary" style={{marginTop:30}} onPress={renderAdditionalComponent}> Avanzar </ThemedButton>
              <Animated.Text
                style={{
                  position:"absolute",
                  top:50,
                  width: 300,
                  color: '#eee',
                  textAlign:'center',
                  fontSize:14,
                  fontWeight: 'bold',
                  opacity: fadeAnim  // Bind opacity to animated value
                }}
              >
                Toca la carta, leela, descartala hacia uno de los lados y pasa el celular al de tu derecha
              </Animated.Text>
            </>
          :
          
          <>
            <Text style={styles.bgtext}>No hay mas cartas que mostrar :(</Text>
            <ThemedButton  name="bruce" type="primary" style={{marginTop:30}} onPress={shuffle} >Mezclar de nuevo</ThemedButton>

          </>
          
        }
        
        {cards
            .slice(0, 2)
            .reverse()
            .map((item, index, items) => {
               // check if it's top card
               const isLastItem = index === items.length - 1;
               // apply panHandlers if it's top card
               const panHandlers = isLastItem ? { ..._panResponder.panHandlers } : {};
               // check if it's next card
               const isSecondToLast = index === items.length - 2;
               // rotate from -30 degree to +30 degree for swipe distance of -200 to +200
               const rotate = animation.x.interpolate({
                 inputRange: [-200, 0, 200],
                 outputRange: ['-30deg', '0deg', '30deg'],
                 extrapolate: 'clamp', // make sure the rotation doesn't go beyong 30 degrees.
               });

               // prepare card styles
               const animatedCardStyles = {
                 transform: [{ rotate }, ...animation.getTranslateTransform()],
                 opacity,
               };
               const cardStyle = isLastItem ? animatedCardStyles : undefined;
               const nextStyle = isSecondToLast
                 ? { transform: [{ scale: scale }], borderRadius: 20 }
                 : undefined;

              return (
                  <Card panHandlers={panHandlers} cardStyle={cardStyle} nextStyle={nextStyle} item={item} key={item.id} type={type} action={renderAdditionalComponent}/>
              );
        })}
        {
          type !== "infiltrate"&&
            <Animated.View style={{position: 'absolute', alignSelf: 'center', top: 0, opacity: lottieOpacity }}>
              <LottieView
                  ref={lottieRef}
                  key={currentAnimation}
                  source={currentAnimation}
                  autoPlay
                  loop={false}
                  onAnimationFinish={toggleAnimation}
                  style={{ width: 200, height: 200 }}
                />
          </Animated.View>
        }


      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
  },

  bgtext:{
      color: '#444',
      fontSize: 18,
  },
  bgInfiltrateText:{
      width: "60%",
      textAlign: "justify",
      color: '#eee',
      fontSize: 18,
      fontWeight: 'bold',
      backgroundColor: 'rgba(0,0,0,1)',
      padding: 10,
      borderRadius: 10,
  }
});

export default SwipableCards;
