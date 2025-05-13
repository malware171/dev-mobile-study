import { View, Text } from "react-native";
import React from "react";

interface CarProps {
  car: string;
  brand: string;
  hp: number;
}

export default function Car({ car, brand, hp }: CarProps) {
  return (
    <View>
      <Text>Carro: {car}</Text>
      <Text>Marca: {brand}</Text>
      <Text>HP: {hp}</Text>
    </View>
  );
}
