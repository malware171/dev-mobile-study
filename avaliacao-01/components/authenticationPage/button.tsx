import { View, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

interface ButtonProps {
  title: string
}

export default function Button({title}: ButtonProps) {

  return (
    <TouchableOpacity style = {styles.buttonContainer}>
      {title}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#1D61E7",
    padding: 14,
    width: "100%",
    borderRadius: 10,
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "inter"
  }
})