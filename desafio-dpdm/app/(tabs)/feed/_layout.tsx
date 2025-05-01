import { Stack } from "expo-router";

export default function _layout() {
  return (
    <Stack>
      <Stack.Screen
        name="[postId]"
        options={{ title: "Detalhes" }}
      ></Stack.Screen>

      <Stack.Screen name="postList" options={{ title: "Feed" }}></Stack.Screen>
    </Stack>
  );
}
