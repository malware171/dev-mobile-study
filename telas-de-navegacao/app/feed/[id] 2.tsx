import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function FeedPage() {
  const { id } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Text>Feed: {id}</Text>
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
