import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="(tabs)/profile"
        options={{ title: "Meu Perfil" }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="(tabs)/feed"
        options={{ title: "Feed", headerShown: false }}
      ></Tabs.Screen>
    </Tabs>
  );
}
