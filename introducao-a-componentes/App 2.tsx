import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Car from "./src/components/Car";
import Search from "./src/components/Search";
import { log } from "console";

export default function App() {
  const handleSearch = (text: string) => {
    console.log(text);
  };

  return (
    <View style={styles.container}>
      <Search handleSearch={handleSearch} />
      <Text>Cars List</Text>
      <StatusBar style="auto" />
      <Car car="Funca" brand="VW" hp={150} />
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
