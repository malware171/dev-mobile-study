import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const pet = {
    animal: "dog",
    name: "chocolate",
    age: 32,
  };
  let result =
    pet.animal === "dog" ? (
      <Text>
        Who let the dogs out: {pet.name}, {pet.age}
      </Text>
    ) : (
      <Text>
        Are we in Jumanji {pet.name}, {pet.age}?
      </Text>
    );
  return (
    <View style={styles.container}>
      <Text>Animal: {pet.animal}</Text>
      <Text>Nome: {pet.name}</Text>
      <Text>Animal: {pet.age}</Text>
      <Text>{result}</Text>
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
