import React, {useEffect, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BackgroundMain from '../../components/General/BackgroundMain';
import BackButton from '../../components/General/BackButton';
import { AntDesign } from '@expo/vector-icons';
import Gameicon from '../../components/General/Gameicon';
import { useNavigation } from '@react-navigation/native';
import { ThemedButton } from 'react-native-really-awesome-button';

export default function InfiltrateMode() {
  const [infiltrates, setInfiltrates] = useState(1);
  const [time, setTime] = useState(5);
  const [maxInfiltrates, setMaxInfiltrates] = useState(1);
  const navigation = useNavigation();

  useEffect(() => {
    const loadSettings = async () => {
      const storedInfiltrates = await AsyncStorage.getItem('infiltrates');
      const storedTime = await AsyncStorage.getItem('time');
      const storedPlayers = await AsyncStorage.getItem('players');
      if(storedPlayers) {
        setMaxInfiltrates(JSON.parse(storedPlayers).length-1);
        const suggestedInfiltrates = Math.max(1, Math.ceil(JSON.parse(storedPlayers).length * 0.2));
        setInfiltrates(suggestedInfiltrates);
      }
      if(storedInfiltrates) {
        setInfiltrates(JSON.parse(storedInfiltrates));
      }
      if(storedTime) {
        setTime(JSON.parse(storedTime));
      }
    }
    loadSettings();
  }, []);

  const incrementInfiltrates = async () => {
    if (infiltrates < maxInfiltrates) {
      const newInfiltrates = infiltrates + 1;
      setInfiltrates(newInfiltrates);
      await AsyncStorage.setItem('infiltrates', JSON.stringify(newInfiltrates));
    }
  }

  const decrementInfiltrates = async () => {
    if (infiltrates > 1) {
      const newInfiltrates = infiltrates - 1;
      setInfiltrates(newInfiltrates);
      await AsyncStorage.setItem('infiltrates', JSON.stringify(newInfiltrates));
    }
  }

  const incrementTime = async () => {
    if (time < 7) {
      const newTime = time + 1;
      setTime(newTime);
      await AsyncStorage.setItem('time', JSON.stringify(newTime));
    }
  }

  const decrementTime = async () => {
    if (time > 2) {
      const newTime = time - 1;
      setTime(newTime);
      await AsyncStorage.setItem('time', JSON.stringify(newTime));
    }
  }
  
  const advance = async () => {
    await AsyncStorage.setItem('infiltrates', JSON.stringify(infiltrates));
    await AsyncStorage.setItem('time', JSON.stringify(time));
    navigation.navigate('InfiltrateCardsPart');
  }

  return (
    <SafeAreaView style={styles.container}>
      <BackButton/>
      <BackgroundMain/>
      <View style={styles.optionsContainer}>
        <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>Configura tu partida</Text>
        <View style={styles.item}>
            <Gameicon name="testicons-spy" size={70} color="white" />
            <Text style={{color: 'white', fontSize: 20, marginVertical:10}}>Número de infiltrados</Text>
            <View style={styles.counter}>
                <TouchableOpacity onPress={decrementInfiltrates}>
                    <AntDesign name="minus" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 20}}>{infiltrates}</Text>
                <TouchableOpacity onPress={incrementInfiltrates}>
                    <AntDesign name="plus" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        <View style={styles.item}>
            <Gameicon name="testicons-extra-time" size={70} color="white" />
            <Text style={{color: 'white', fontSize: 20, marginVertical:10}}>Tiempo de discusion</Text>
            <View style={styles.counter}>
                <TouchableOpacity onPress={decrementTime}>
                    <AntDesign name="minus" size={30} color="white" />
                </TouchableOpacity>
                <Text style={{color: 'white', fontSize: 20}}>{time}:00</Text>
                <TouchableOpacity onPress={incrementTime}>
                    <AntDesign name="plus" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        {/* <TouchableOpacity style={styles.button} onPress={()=>{ navigation.navigate('InfiltrateCardsPart')}}>
          <Text style={{color: "white"}}>Iniciar juego</Text>
        </TouchableOpacity> */}
        <ThemedButton 
          name="bruce" 
          type="anchor" 
          backgroundColor='#00b3a6' 
          textColor='white' 
          before={
            <Gameicon name="testicons-card-random" size={30} color="white" style={{marginRight:10}} />
          }
          style={styles.button}
          onPress={advance}
        >
          Iniciar juego
        </ThemedButton>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  optionsContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 200,
    backgroundColor: '#222',
    borderRadius: 10,
  },
  counter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    marginTop: 30,

  }
})
