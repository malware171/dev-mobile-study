import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={styles.container}>
      <View style={styles.containerCenter}>
        <Text style={styles.title}>Malware171</Text>
        <Text style={styles.subTitle}>Quem sabe um dia eu poste algo</Text>
      </View>

      <View>
        <Text>Seguidores: 542</Text>
        <Text>Likes: 15.039</Text>
      </View>

      <Link href={"/feed/postList"} style={styles.button}>
        Feed Page
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    fontWeight: "ultralight",
  },

  containerCenter: {
    justifyContent: "center",
    alignItems: "center",
    gap: 2,
  },

  button: {
    backgroundColor: "pink",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
});
