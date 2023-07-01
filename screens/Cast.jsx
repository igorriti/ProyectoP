import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { CastButton, useCastState } from "react-native-google-cast";

const Cast = () => {
  const startCasting = async () => {
    try {
      // Initialize Google Cast
      await GoogleCast.init();

      // Connect to your custom receiver
      // Replace "YOUR_APP_ID" with your custom receiver app ID
      await GoogleCast.cast({ appId: '5174EE82' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <CastButton style={{ tintColor: "green", height: 48, width: 48 }} />
      <Text>Click on the Cast button</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cast;
