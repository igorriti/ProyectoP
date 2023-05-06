import { View, Text,Animated, StyleSheet } from 'react-native'
import React,{useState} from 'react'
import { ThemedButton } from "react-native-really-awesome-button";

export default function Card({panHandlers, cardStyle, nextStyle, item, type, action}) {
  const [config, setConfig] = useState(item.title? "start" : item.icon? "space-between" : "space-evenly")

  return (
    <Animated.View
    {...panHandlers}
    style={[styles.card, cardStyle, nextStyle]}  // apply styles
    key={item.id}>
    <View style={[styles.textContainer, { justifyContent: item.title ? "flex-start" : item.icon ? "space-evenly"  : "space-evenly"}]}>
      {item.title && <Text style={styles.titleText}>{item.title}</Text>}
      <Text style={styles.descriptionText}>{item.description}</Text>
      {item.icon? 
       item.icon
       :
       type === "badfriends" ?
        <ThemedButton name="cartman" type="danger" style={styles.button} onPress={action}>Iniciar cuenta atras</ThemedButton>
       :
        <ThemedButton name="bruce" type="primary" style={styles.button}>Iniciar cuenta atras</ThemedButton>
    }
    </View>
  </Animated.View>
  )
}


const styles = StyleSheet.create({

    card: {
        width: '80%',
        height: 450,
        backgroundColor: '#000',
        position: 'absolute',
        borderRadius: 20,
        
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
        borderWidth: 8,
        borderColor: '#f4f4f4',
      },
      imageContainer: {
        flex: 1
      },
      image: {
        width: '100%',
        height: '100%'
      },
      textContainer: {
        padding: 30,
        color: "#fff",
        flex: 1,
        alignItems: 'center',
      },
      titleText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
      },
      descriptionText: {
        fontSize: 20,
        textAlign: 'justify',
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