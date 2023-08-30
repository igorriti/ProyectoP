import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from "react-native";
import GoogleCast, { CastButton, useCastSession, useCastChannel } from 'react-native-google-cast';
import BackgroundMain from "../components/General/BackgroundMain";
import BackButton from "../components/General/BackButton";
import { ThemedButton} from 'react-native-really-awesome-button';
import Gameicon from "../components/General/Gameicon";
import BetModal from "../components/HorseRacing/BetModal";
import BetListModal from "../components/HorseRacing/BetListModal";
import horses from "../assets/horses"
import {FontAwesome} from '@expo/vector-icons';
import WinnersModal from "../components/HorseRacing/WinnersModal";
export default function HorseRacing(){

  const sessionManager = GoogleCast.getSessionManager();

  const [bid, setBid] = useState(false);
  const [players, setPlayers] = useState(["Juan", "Jose", "Miguel"]);
  const [horsesNames, setHorsesNames] = useState(horses);
  const [bets, setBets] = useState([]); 
  const [isMuted, setIsMuted] = useState(false);

  const [modalBetVisible, setModalBetVisible] = useState(false);
  const [modalBetListVisible, setModalBetListVisible] = useState(false);
  const [modalWinnersVisible, setModalWinnersVisible] = useState(false);
  const [isRacing , setIsRacing] = useState(false);
  const [isFirstRace, setIsFirstRace] = useState(true);
  const [winners, setWinners] = useState([]);
  const castSession = useCastSession();

  const channel = useCastChannel('urn:x-cast:testChannel', message => {
    console.log('Message received: ', message);
    message = JSON.parse(message);
    if (message.msg == "raceEnd"){
      setIsRacing(false);
      let winnersround = []
      if (message.winners.length != 0 && message.winners != undefined && message.winners != null && message.winners[0] != null) 
        for (let i = 0; i < message.winners.length; i++) {
          const winner = message.winners[i];
          for (let j = 0; j < bets.length; j++) {
            const bet = bets[j];

            if (bet.player == winner && bet.horse == message.horse) {
              winnerText = `${winner} reparte ${bet.drinks*2} tragos`
              winnersround.push(winnerText);
            }
          }
        }

      setWinners(winnersround);
      //Wait for the winners to be setted
      setModalWinnersVisible(true);
      setIsRacing(false);
    }

  });

  const sendMessageToChannel = (message) => {

      try {
        if (castSession) {
          message = JSON.stringify(message);
          console.log('Message to send: ', message);
          channel.sendMessage(message);
        } else {
          console.log('No cast session is connected');
        }
      } catch (error) {
        console.log('Failed to send message: ', error);
      }
    
  }

  const startRace = async () => {
    if (isFirstRace) {
      setIsFirstRace(false);
    }
    setIsRacing(true);
    let message = { msg: 'startRace' };
    // message = JSON.stringify(message);
    sendMessageToChannel(message);
  }

  const replayRace = async () => {
    setIsRacing(true);
    let message = { msg: 'replayRace' };
    sendMessageToChannel(message);
  }

  const testBet = async () => {
    const message = {msg: 'test'} 
    sendMessageToChannel(message);
  }

  const submitBet = async (selectedPlayer,selectedHorse,drinkAmount) => {
    let betDetails = {
      player:selectedPlayer ,
      horse: selectedHorse,
      drinks: drinkAmount,
    };

    let message = { msg: 'bet', details: betDetails };
    sendMessageToChannel(message);
    setBid(true);

    // Save the bet to state
    setBets([...bets, betDetails]);
  }

  const editBet = ( player,previousHorse, newBet) => {
    //Mando mensaje para editar la apuesta al chromecast
    message = { msg: 'editBet', oldDetails: {player: player, horse: previousHorse}, newDetails: newBet };
    sendMessageToChannel(message);
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
      betDetails = bets[index];
      message = { msg: 'deleteBet', details: betDetails };
      newBets = [...bets];
      newBets.splice(index, 1);

    } else {
      message = { msg: 'deleteAllBets'};
      newBets = []
      setBid(false);
    }
    setBets(newBets);

    if (newBets.length == 0) {
      setBid(false);
    }

    sendMessageToChannel(message);

  }

  const muteRace = () => {
    let message = { msg: 'muteRace' };
    sendMessageToChannel(message);
    setIsMuted(!isMuted);
  }

  useEffect(() => {
    const fetchPlayers = async () => {
      const storedPlayers = await AsyncStorage.getItem('players');
      if (storedPlayers !== null) {
        setPlayers(JSON.parse(storedPlayers));
      }
    }
    fetchPlayers();

    return() => {
      sessionManager.endCurrentSession(true);
      setBid(false);
    }
  }, []);
  
  useEffect(() => {
    if (!castSession) {
      setBid(false);
      setWinners([]);
      setIsFirstRace(true);
      setIsRacing(false);
      setBets([]);
      setIsMuted(false);

      
    }
  }, [castSession]);
  return (
    <View style={styles.container}>
      <BackgroundMain/>
      <BackButton/>
      {
        !castSession &&
        <Text style={[styles.text, {textAlign: "center", width:"70%"}]}>Aprete el boton de Cast para empezar a jugar</Text>

      }
      <View style={{flexDirection:"row", justifyContent:"center", width:"100%", alignItems:"center"}}>

        <CastButton style={{ tintColor: "white", height: 65, width: 65, }} />

        {
          castSession &&
          <TouchableOpacity style={styles.buttonSound} onPress={muteRace}>
            <FontAwesome name={isMuted ? "volume-off" : "volume-up"} size={24} color="white" />
          </TouchableOpacity>
        }

      </View>
      {
        castSession && !bid &&
        <Text style={[styles.text, {textAlign: "center", width:"70%", marginBottom:0}]}>Hagan sus apuestas para empezar la carrera</Text>

      }
      {/* <AwesomeButton
        
      >
        Realizar apuesta
      </AwesomeButton> */}



      {
        castSession &&
        <>
          <ThemedButton
              name="cartman"
              type="danger"
              before={<Gameicon name="testicons-two-coins" color="#fff" size={25} style={{marginRight:10}}/>}
              borderColor="#6a87fc"
              backgroundDarker="#365db7"
              textColor="#fff"
              style={styles.button}
              disabled={isRacing}
              onPress={() => setModalBetVisible(true)}
          >
            Realizar apuesta
          </ThemedButton>

          {
            bets.length > 0 &&
              <ThemedButton
                name="cartman"
                type="danger"
                before={<Gameicon name="testicons-archive-register" color="#fff" size={25} style={{marginRight:10}}/>}
                borderColor="#14A180"
                backgroundDarker="#0C705D"
                textColor="#fff"
                style={styles.button}
                disabled={isRacing}

                onPress={() => setModalBetListVisible(true)}
              >
                Editar apuestas
              </ThemedButton>
          }
          { bid &&
            <>
              <View style={styles.raceManager}>
                  {
                    isFirstRace &&
                    <ThemedButton name="bruce" type="primary" 
                    width={120}
                    height={80}
                    style={styles.button}   
                    onPress={startRace} 

                  > 
                    Comenzar carrera 
                  </ThemedButton>
                  }

                  {
                    !isFirstRace  &&
                    <ThemedButton 
                      name="bruce" 
                      type="secondary" 
                      width={120}
                      height={80}
                      style={styles.button} 
                      disabled={isRacing}
                      onPress={replayRace}
                    > 
                      Iniciar carrera 
                    </ThemedButton>
                  }

                  {
                    !isFirstRace  &&
                    <ThemedButton 
                      name="cartman" 
                      type="danger" 
                      width={120}
                      height={80}
                      style={styles.button} 
                      disabled={isRacing}

                      onPress={() => deleteBet(-1)}
                    > 
                      Reiniciar apuestas
                    </ThemedButton>
                  }

              </View>
            </>
          }
        </>
      }

      <BetListModal
        isVisible={modalBetListVisible}
        onClose={() => setModalBetListVisible(false)}
        bets={bets}
        editBet={editBet}
        deleteBet={deleteBet}
      />
      <BetModal
        isVisible={modalBetVisible}
        onClose={() => setModalBetVisible(false)}
        players={players}
        horses={horsesNames}
        submitBet={submitBet}
        bets={bets}
      />
      <WinnersModal
        isVisible={modalWinnersVisible}
        onClose={() => {setModalWinnersVisible(false), setWinners([])}} 
        winners={winners.length == 0? ["Nadie gana, toman todos 1 trago"] : winners} />

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
  raceManager:{
// I want a grid of 3 buttons
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,

    
  },
  button: {
    marginTop: 20,
  },
  buttonSound: {

    padding: 5,
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
