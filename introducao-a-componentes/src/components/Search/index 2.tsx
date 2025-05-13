import { View, Button, TextInput } from "react-native";
import React, { useState } from "react";
import { log } from "console";

interface onSearchProps {
  handleSearch: (text: string) => void;
}

export default function Search({ handleSearch }: onSearchProps) {
  const [text, setText] = useState("");

  const onPress = () => {
    handleSearch(text);
  };

  return (
    <View>
      <TextInput onChangeText={setText} value={text} placeholder="Digite" />
      <Button title="Buscar" onPress={onPress} />
    </View>
  );
}
