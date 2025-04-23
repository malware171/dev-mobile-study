import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./components/Login";

export default function App() {
  const handleLogin = (username: string, password: string) => {
    console.log(username);
    console.log(password);
  };

  return (
    <View style={styles.container}>
      <Login onPress={handleLogin}></Login>
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
