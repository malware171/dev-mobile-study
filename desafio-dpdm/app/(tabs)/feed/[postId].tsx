import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router/build/hooks";

export default function PostId() {
  const { title, description, likes } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{description}</Text>
        <Text style={styles.subTitle}>Likes: {likes}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "white",
  },
  post: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightpink",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
    gap: 5,
  },

  title: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    color: "white",
    fontSize: 14,
    fontWeight: "ultralight",
  },
});
