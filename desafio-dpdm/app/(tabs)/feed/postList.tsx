import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import Post from "./post";
import { Link } from "expo-router";

export default function PostList() {
  // const goToDetails = () => router.push(`/(tabs)/feed/${postId}`)

  return (
    <View style={styles.container}>
      <Post
        postId="1"
        title="Post 1"
        description="Descrição do post"
        likes={250}
      ></Post>

      <Post
        postId="2"
        title="Post 2"
        description="Descrição do post"
        likes={430}
      ></Post>

      <Post
        postId="3"
        title="Post 3"
        description="Descrição do post"
        likes={120}
      ></Post>

      <Post
        postId="4"
        title="Post 4"
        description="Descrição do post"
        likes={300}
      ></Post>
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

  color: {
    backgroundColor: "pink",
  },
});
