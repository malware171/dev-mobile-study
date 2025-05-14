import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface BallProps {
   number: number
}

export default function Ball({number}: BallProps) {
  return (
    <View style = {styles.backgroundContainer}>
      <View style = {styles.internalContainer}>
         <Text style={styles.numberText}>{number}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   backgroundContainer: {
      backgroundColor: "#d41002",
      maxWidth: 70,
      maxHeight: 70,
      padding: 20,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
   
   },
   internalContainer: {
      backgroundColor: "#e3e3e3",
      width: 45,
      height: 45,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: "center",
   },
   numberText: {
      fontSize: 20,
      fontWeight: '800'
   }
})