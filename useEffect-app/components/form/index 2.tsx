import { View, Text, TextInput, Button } from "react-native";
import React, { useEffect, useState } from "react";

export default function Form() {
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordIsValid, setPaspasswordIsValid] = useState(false);

  useEffect(() => {
    if (password < 6) {
      setPaspasswordIsValid(false);
    }
  }, [password, passwordConfirmation]);

  return (
    <View>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
      />
      <TextInput
        value={passwordConfirmation}
        onChangeText={setPasswordConfirmation}
        placeholder="Confirm Password"
        secureTextEntry
      />

      <Button title="Reset Password"></Button>
    </View>
  );
}
