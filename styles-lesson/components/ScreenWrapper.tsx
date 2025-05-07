import {View,Text,StatusBar,TouchableOpacity,StyleSheet, ScrollView,} from "react-native";
import React, { PropsWithChildren, ReactNode } from "react";
import { Stack } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type ScreenWrapperProps = {
  title: string;
} & PropsWithChildren;

export default function ScreenWrapper({ title, children }: ScreenWrapperProps) {
  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Stack.Screen
        options={{
          title,
          headerRight: () => (
            <TouchableOpacity>
              <MaterialCommunityIcons name="menu" size={24} color="black" />
            </TouchableOpacity>
          ),
          contentStyle: {
            backgroundColor: "white",
          },
        }}
      />
      {children}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 8,
  },
});
