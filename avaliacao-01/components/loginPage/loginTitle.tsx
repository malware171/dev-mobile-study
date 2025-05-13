import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function title() {
  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>Login</Text>
      <Text style = {styles.subtitle}>
        Não tem uma conta ?
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  title: {
    color: "#111827",
    fontSize: 30,
    fontWeight: '600'
  },
  subtitle: {
    color: "#6C7278",
    fontSize: 14
  }
})