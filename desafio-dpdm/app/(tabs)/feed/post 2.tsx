import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

interface PostProps {
  postId: string;
  title: string;
  description: string;
  likes: number;
}

export default function Post({ postId, title, description, likes }: PostProps) {
  return (
    <Link
      href={{
        pathname: "/(tabs)/feed/[postId]",
        params: {
          postId: postId,
          title: title,
          description: description,
          likes: likes,
        },
      }}
    >
      <View style={styles.post}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{description}</Text>
        <Text style={styles.subTitle}>Likes: {likes}</Text>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  post: {
    backgroundColor: "lightpink",
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
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
