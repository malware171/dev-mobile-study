import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function ProductPage() {
  const { productId } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>Produto: {productId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
