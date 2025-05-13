import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoginInput from '@/components/loginPage/loginInput'
import LoginTitle from '@/components/loginPage/loginTitle'
import Button from '@/components/loginPage/Button'


export default function index() {
  return (
    <View style = {styles.container}>
      <View style = {styles.backgroundContainer}>
         <LoginTitle/>
         <LoginInput/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F6F8FA",
      padding: 35
   },
   backgroundContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      width: "100%",
      padding: 30,
      borderRadius: 20
   }
})