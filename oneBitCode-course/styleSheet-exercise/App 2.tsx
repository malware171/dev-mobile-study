import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  interface ItemProps {
    text: string;
    color: string;
  }

  function Item({ text, color }: ItemProps) {
    return (
      <View
        style={{
          padding: 20,
          backgroundColor: color,
          marginBottom: 8,
          borderRadius: 20,
          width: "100%",
        }}
      >
        <Text>{text}</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minha jornada no React Native</Text>
      <View style={styles.itemGrid}>
        <Item color="#00FF9F" text="Fundamentos do React Native"></Item>
        <Item color="#00FF9F" text="Expo e Expo CLI"></Item>
        <Item color="#00FF9F" text="Estilização com StyleSheet"></Item>
        <Item color="#F64348" text="Navegação"></Item>
        <Item color="#F64348" text="SrollView e FlatList"></Item>
        <Item color="#F64348" text="Perifericos"></Item>
        <Item color="#F64348" text="Styled Components"></Item>
        <Item color="#F64348" text="Temas e Estilos Globais"></Item>
        <Item color="#F64348" text="Consumo de APIs"></Item>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-start",
    paddingHorizontal: 16,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    borderBottomColor: "#121212",
    borderBottomWidth: 1,
    textAlign: "left",
    paddingBottom: 8,
  },
  itemGrid: {
    paddingTop: 10,
    flexWrap: "wrap",
    width: "100%",
  },
});
