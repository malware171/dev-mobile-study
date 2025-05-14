import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { Link, router, useRouter } from "expo-router";

export default function index() {
  const randomId = () => Math.floor(Math.random() * 10);

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Link style={styles.linkProduct} href={`/product/${randomId()}`}>
        Random Product
      </Link>

      <Button
        title="Random Feed"
        onPress={() => router.push(`/feed/${randomId()}`)}
      ></Button>
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
  linkProduct: {
    backgroundColor: "#404040",
    color: "white",
    padding: 10,
    borderRadius: 10,
  },
});
