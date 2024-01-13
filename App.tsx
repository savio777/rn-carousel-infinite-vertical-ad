import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "./src/components/Carousel";
import { imagesMock } from "./src/dataMock";

export default function App() {
  return (
    <View style={styles.container}>
      <Carousel data={imagesMock} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
