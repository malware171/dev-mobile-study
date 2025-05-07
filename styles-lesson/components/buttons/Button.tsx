import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

interface ButtonProps {
   text: string
}

export default function Button({text: string} : ButtonProps) {
  return (
    <TouchableOpacity style = {style.container}>
      <Text>{string}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
   container: {
      alignItems: "center",
      backgroundColor: "rgb(249 249 249)",
      padding: 20,
      marginBottom: 10
   }
})