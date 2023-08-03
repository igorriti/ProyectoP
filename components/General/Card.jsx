import { View, Text,Animated as RawAnimated, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React,{useState} from 'react'
import { ThemedButton } from "react-native-really-awesome-button";
import Timer from '../5seconds/Timer';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { FontAwesome5 } from '@expo/vector-icons';
export default function Card({ panHandlers, cardStyle, nextStyle, item, type, action, mix}) {
  const spin = useSharedValue(0);
  const [flipped, setFlipped] = React.useState(false);

  const flipCard = () => {
    spin.value = withSpring(flipped ? 0 : 1, { stiffness: 10, damping: 10, mass: 1 });
    setFlipped(!flipped);
  }

  const frontAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${spin.value * 180}deg` },
      ],
    };
  });

  const backAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { rotateY: `${spin.value * 180 + 180}deg` },
      ],
    };
  });

  return (
    <>
      <RawAnimated.View
        {...panHandlers}
        style={[styles.card, cardStyle, nextStyle]}  // apply styles
        key={item.id}>
        {
          type === "infiltrate" &&
          <Animated.View style={[styles.textContainer, styles.frontCard, frontAnimatedStyle, {zIndex: 30}]}>
            <Image style={{position:"absolute", width:"100%", height:"100%"}} source={require("../../assets/images/bgcard.png")} />
            <TouchableOpacity onPressIn={()=>flipCard()} style={{width: "25%", height: "25%", alignItems: "center", justifyContent: "center", zIndex: 30}}>
              <FontAwesome5 name="question" size={80} color="white" />
            </TouchableOpacity>
        
          </Animated.View>
        }


        <Animated.View style={[styles.textContainer, type==="infiltrate" && [ styles.backCard, backAnimatedStyle]]}>
          {item.title && <Text style={styles.titleText}>{item.title}</Text>}
          <Text style={styles.descriptionText}>{item.description}</Text>
          {item.icon ?
            item.icon
            :


            type === "badfriends" || (mix && !item.title) ?
              <ThemedButton name="cartman" type="danger" style={styles.button} onPress={action}>Iniciar cuenta atras</ThemedButton>
              :

              type === "fivesecondsmode"?
                <Timer action={action} />
                :
                <></> 
          }
        </Animated.View>

      </RawAnimated.View>

    </>
  )
}

const styles = StyleSheet.create({

    card: {
        width: '85%',
        height: 450,
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center',

      },
      imageContainer: {
        flex: 1
      },
      image: {
        width: '100%',
        height: '100%'
      },
      textContainer: {
        // flex: 1,
        // padding: 30,
        width: '100%',
        height: 450,
        color: "#fff",
        backgroundColor: '#000',
        position: 'absolute',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 20,
        backgroundColor: '#000',
        
        borderWidth: 8,
        borderColor: '#f4f4f4',

        ...Platform.select({
          android: {
            elevation: 1,
          },
          ios: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3,
          },
          web: {
            boxShadow: '0 3px 5px rgba(0,0,0,0.10), 1px 2px 5px rgba(0,0,0,0.10)',
          },
        }),
   
      },
      frontCard: {
        padding:0,        
        backfaceVisibility: "hidden",
      },
      backCard: {
        
        backfaceVisibility: "hidden",
      },
      titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
      descriptionText: {
        paddingHorizontal: 20,
        fontSize: 20,
        textAlign: 'center',
        color: '#fff',
        paddingTop: 5,
        marginBottom: 50,
      },
      icon: {
        marginRight: 10,
      },
      button: {
        

      }
});