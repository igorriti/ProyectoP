import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import GoogleCast, { CastButton, useCastSession, useCastChannel } from 'react-native-google-cast';
import BackgroundMain from "../components/General/BackgroundMain";
import BackButton from "../components/General/BackButton";
import { ThemedButton } from 'react-native-really-awesome-button';
import BetModal from "../components/HorseRacing/BetModal";
import DropdownSelect from "../components/HorseRacing/DropdownSelect";

export default function HorseRacing(){
  const [bid, setBid] = useState(false);
  const [players, setPlayers] = useState([]);
  const [horses, setHorses] = useState(["Claudio", "Jorge", "Pablo", "Sergio", "Tomas", "LOL", "Juan", "Ernesto"]);
  const [bets, setBets] = useState({}); 
  const [modalBetVisible, setModalBetVisible] = useState(true);
  // const castSession = useCastSession();
  const [castSession, setCastSession] = useState(false);

  const channel = useCastChannel('urn:x-cast:testChannel', {
    onMessage: (message) => {
      console.log('Received message', message);
      const parsedMessage = JSON.parse(message);
    },
  });

  const startRace = async () => {
    let message = { msg: 'startRace' };
    message = JSON.stringify(message);
    sendMessageToChannel(message);
  }

  const replayRace = async () => {
    let message = { msg: 'replayRace' };
    message = JSON.stringify(message);
    sendMessageToChannel(message);
  }

  const sendMessageToChannel = (message) => {
    if (castSession) {
      console.log('Cast session is connected');
      channel.sendMessage(message);
    } else {
      console.log('No cast session is connected');
    }
  }

  const submitBet = (selectedPlayer,selectedHorse,drinkAmount) => {
    let betDetails = {
      player:selectedPlayer ,
      horse: selectedHorse,
      drinks: drinkAmount,
    };

    let message = { msg: 'bet', details: betDetails };
    message = JSON.stringify(message);
    sendMessageToChannel(message);
    setBid(true);

    // Update the player bet in the format { playerName: betAmount }
    setBets(prevBets => ({ ...prevBets, [selectedPlayer]: drinkAmount }));
  }

  const handlePlayerChange = (player) => {
    // setSelectedPlayer(player);
    // setDrinkAmount(bets[player] || 0); // Use the bets from state instead of AsyncStorage
  }

  useEffect(() => {
    const fetchPlayers = async () => {
      const storedPlayers = await AsyncStorage.getItem('players');
      if (storedPlayers !== null) {
        setPlayers(JSON.parse(storedPlayers));
        setCastSession(true);
      }
    }
    fetchPlayers();
  }, []);
  

  return (
    <View style={styles.container}>
      <BackgroundMain/>
      <BackButton/>
      <Text style={styles.text}>Click on the Cast button</Text>

      <CastButton style={{ tintColor: "white", height: 48, width: 48 }} />
      {castSession &&
        <BetModal
        isVisible={modalBetVisible}
        onClose={() => setModalBetVisible(false)}
        players={players}
        horses={horses}
        submitBet={submitBet}
      />
      }
      {
        castSession &&
        <>
          { !bid &&
            <></>

          }

          { bid &&
            <>
              <ThemedButton 
                name="bruce" 
                type="primary" 
                style={styles.button} 
                onPress={startRace}
              > 
                Comenzar carrera 
              </ThemedButton>

              <ThemedButton 
                name="bruce" 
                type="secondary" 
                style={styles.button} 
                onPress={replayRace}
              > 
                Reiniciar carrera 
              </ThemedButton>

              <ThemedButton 
                name="bruce" 
                type="secondary" 
                style={styles.button} 
                onPress={() => setBid(false)}
              > 
                Go back to betting 
              </ThemedButton>
            </>
          }
        </>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 80,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 10,
  },
  bettingContainer: {
    marginTop: 30,
    width: '80%',
  },
  button: {
    marginTop: 30,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: '#fff',
    borderRadius: 5,
  },
});
