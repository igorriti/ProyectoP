import { View, StyleSheet, Vibration } from 'react-native'
import React, {useEffect, useState} from 'react'
import BackgroundMain from '../components/General/BackgroundMain';
import BackButton from '../components/General/BackButton';
import FireButton from '../components/RuRoulette/FireButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import ExplanationModal from '../components/General/ExplanationModal';
import InfoButton from '../components/General/InfoButton';
import DrinkModal from '../components/General/DrinkModal';
import Gun from '../components/RuRoulette/Gun';
import { Audio } from 'expo-av';
//TODO: 
//Add shots configuration

export default function RuRoulette({route}) {
    const [roulette, setRoulette] = useState([0,0,0,1,0,0])
    const [modalVisible, setModalVisible] = useState(false)
    const [sound, setSound] = useState(null);
    const [sound2, setSound2] = useState(null);
    const [rotation, setRotation] = useState(false)
    const [infoText,setInfoText] = useState(route.params.description);
    const [name, setName] = useState(route.params.name);
    const [explanationModalVisible, setExplanationModalVisible] = useState(false);
    const spin = () => {
        //Set roulette to all 0s and assign 1 to a random index
        const randomIndex = Math.floor(Math.random() * 6)
        const newRoulette = [0,0,0,0,0,0]
        newRoulette[randomIndex] = 1
        setRoulette(newRoulette)
    }

    const shoot = () => {
        //Check if the bullet is in the current position
        if (roulette[0] == 1) {
            setModalVisible(true)
            Vibration.vibrate();

            if (sound2) {
                sound2.replayAsync(); // Play the second sound
              }
            spin()
        } else {
            const newRoulette = [...roulette]
            newRoulette.push(newRoulette.shift())
            setRoulette(newRoulette)
            

            if (sound) {
                sound.replayAsync();
              }
        }
        setRotation(!rotation)


    }


    useEffect(() => {
        spin()
        const loadSound = async () => {
            const { sound } = await Audio.Sound.createAsync(
               require('../assets/sounds/emptygun.mp3')
            );
            setSound(sound);
        }
        const loadSound2 = async () => {
            const { sound } = await Audio.Sound.createAsync(
               require('../assets/sounds/gunshoot.mp3')
            );
            setSound2(sound);
        }
        
        loadSound2();
        loadSound();
          
          return () => { 
            sound?.unloadAsync(); // Be sure to unload the sound from memory when component unmounts
            sound2?.unloadAsync();
            };
    }, [])
    
  return (
    <SafeAreaView style={styles.container}>
        <BackButton/>
        <InfoButton onPress={()=>setExplanationModalVisible(true)}/>
        <BackgroundMain/>

        {/* <Barrel onSpin={spin} rot={rotation.value}/> */}
        <Gun spin={spin} rotation={rotation}/>
        <FireButton handlePress={shoot}/>
        <DrinkModal isVisible={modalVisible} setVisible={setModalVisible} explosion={true}/>
        <ExplanationModal isVisible={explanationModalVisible} onClose={()=>setExplanationModalVisible(false)} title={name} content={infoText}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
})