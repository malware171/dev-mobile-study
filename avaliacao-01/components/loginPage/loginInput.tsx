import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'


interface LoginInputProps{
  placeholder: string
  value: string
  onChangeValue: string
}

export default function LoginInput() {
  return (
      <View style={style.containerView}>

        <TextInput
        style = {style.container}
        placeholder='username'

        />
      </View>
  )
}

const style = StyleSheet.create({
  containerView: {
    width: "100%",
  },
  container: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    borderColor: "#EDF1F3",
    borderWidth: 1.5,
  }
})