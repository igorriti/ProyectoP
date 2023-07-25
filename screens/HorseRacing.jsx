import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import GoogleCast, { CastButton, useCastSession, useCastChannel } from 'react-native-google-cast';
import BackgroundMain from "../components/General/BackgroundMain";
import BackButton from "../components/General/BackButton";
import { ThemedButton } from 'react-native-really-awesome-button';
import BetModal from "../components/HorseRacing/BetModal";
import BetListModal from "../components/HorseRacing/BetListModal";
import {horses as h} from "../assets/horses"

export default function HorseRacing(){
  const [bid, setBid] = useState(false);
  const [players, setPlayers] = useState([]);
  const [horses, setHorses] = useState(h);
  const [bets, setBets] = useState([{player: "Jose", horse: "Varela", drinks: 3},{player: "Juan", horse: "Pedro", drinks: 3}]); 
  const [modalBetVisible, setModalBetVisible] = useState(false);
  const castSession = useCastSession();
  // const [castSession, setCastSession] = useState(false);

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
    //ACA MANDO MENSAJE al chromecast
    // sendMessageToChannel(message);
    // setBid(true);

    // Save the bet to state
    setBets([...bets, betDetails]);
  }

  const editBet = ( player,previousHorse, newBet) => {
    //Mando mensaje para editar la apuesta al chromecast
    message = { msg: 'editBet', details: {player: player, previousHorse: previousHorse, newBet: newBet} };
    //SendMessageToChannel(message);
    const newBets = bets.map((bet) => { 
      if (bet.player === player && bet.horse === previousHorse) {
        return newBet;
      }
      return bet;
    }
    );
    setBets(newBets);
  } 

  const deleteBet = (index) => {
    let message, newBets;
    console.log(index);
    if (index > -1) {
      //Mando mensaje para borrar la apuesta al chromecast
      message = { msg: 'deleteBet', details: {index: index} };
      newBets = [...bets];
      newBets.splice(index, 1);
    } else {
      message = { msg: 'deleteBet', details: {index: index} };
      newBets = []
    }
    setBets(newBets);

    //SendMessageToChannel(message);

  }
  useEffect(() => {
    const fetchPlayers = async () => {
      const storedPlayers = await AsyncStorage.getItem('players');
      if (storedPlayers !== null) {
        setPlayers(JSON.parse(storedPlayers));
      }
    }
    fetchPlayers();
  }, []);
  

  return (
    <View style={styles.container}>
      <BackgroundMain/>
      <BackButton/>
      {
        !castSession &&
        <Text style={styles.text}>Aprete el boton de Cast</Text>

      }

      <CastButton style={{ tintColor: "white", height: 48, width: 48 }} />
      <BetListModal
        isVisible={true}
        onClose={() => setModalBetVisible(false)}
        bets={bets}
        editBet={editBet}
        deleteBet={deleteBet}
      />
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
