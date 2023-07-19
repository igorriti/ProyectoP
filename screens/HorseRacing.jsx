import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import GoogleCast, { CastButton, useCastSession, useCastChannel } from 'react-native-google-cast';
import BackgroundMain from "../components/General/BackgroundMain";
import BackButton from "../components/General/BackButton";
import { ThemedButton } from 'react-native-really-awesome-button';

export default function HorseRacing(){
  const castSession = useCastSession();
  const channel = useCastChannel('urn:x-cast:testChannel', {
    onMessage: (message) => {
      console.log('Received message', message);
      const parsedMessage = JSON.parse(message);  // Parse JSON string into JavaScript object


    },
  });


  const startRace = async () => {
    let message = { msg: 'startRace' };
    message = JSON.stringify(message);
    if (castSession) {
      console.log('Cast session is connected');
      channel.sendMessage(message);
    } else {
      console.log('No cast session is connected');
    }
  }
  const replayRace = async () => {
    let message = { msg: 'replayRace' };
    message = JSON.stringify(message);
    if (castSession) {
      console.log('Cast session is connected');
      channel.sendMessage(message);
    } else {
      console.log('No cast session is connected');
    }
  }



  return (
    <View style={styles.container}>
      <BackgroundMain/>
      <BackButton/>
      <CastButton style={{ tintColor: "white", height: 48, width: 48 }} />
      <Text>Click on the Cast button</Text>
      {
        castSession &&
        <>
          {/* <Button title="Start Race" onPress={startRace} /> */}
          <ThemedButton  name="bruce" type="primary" style={{marginTop:30}} onPress={startRace}> Comenzar carrera </ThemedButton>

          {/* <Button title="Replay Race" onPress={replayRace} /> */}
          <ThemedButton  name="bruce" type="primary" style={{marginTop:30}} onPress={replayRace}> Reiniciar carrera </ThemedButton>

        </>
      }

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});

