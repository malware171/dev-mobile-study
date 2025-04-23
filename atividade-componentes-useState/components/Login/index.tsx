import { View, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";

interface LoginProps {
  onPress: (username: string, password: string) => void;
}

export default function Login({ onPress }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    onPress(username, password);
  };

  return (
    <View>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      ></TextInput>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      ></TextInput>
      <Button onPress={handleLogin} title="Login"></Button>
    </View>
  );
}
