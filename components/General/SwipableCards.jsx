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
import BackButton from './BackButton';

const { width } = Dimensions.get('screen');
const SWIPE_THRESHOLD = 0.25 * width;

const SwipableCards = ({ cards,setCards, renderAdditionalComponent, type}) => {
    const animation = useRef(new Animated.ValueXY()).current;
    const opacity = useRef(new Animated.Value(1)).current;
    const scale = useRef(new Animated.Value(0.9)).current;
  
    const _panResponder = useRef(
        PanResponder.create({
          onStartShouldSetPanResponder: () => true,
          onMoveShouldSetPanResponder: () => true,
          onPanResponderMove: (event, gesture) => {
            animation.setValue({ x: gesture.dx, y: gesture.dy });
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
        })
    ).current;
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
        scale.setValue(0.9);
        opacity.setValue(1);
        animation.setValue({ x: 0, y: 0 });
    }, [cards]);
    
  return (
      <View style={styles.container}>
        <BackButton/>

        <BackgroundMain/>
        <Text style={styles.bgtext}>No hay mas cartas que mostrar :(</Text>
        <ThemedButton  name="bruce" type="primary" style={{marginTop:30}} onPress={shuffle} >Mezclar de nuevo</ThemedButton>
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
  }
});

export default SwipableCards;
