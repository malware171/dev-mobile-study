import React from "react";
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#212121" },
        headerTintColor: "white",

      }}
    >
      <Stack.Screen name="index" options={{ title: "Home Page" }} />
      <Stack.Screen name="product/[productId]" options={{ title: "Produto" }} />
      <Stack.Screen name="feed/[id]" options={{ title: "Post" }} />
    </Stack>
  );
}
