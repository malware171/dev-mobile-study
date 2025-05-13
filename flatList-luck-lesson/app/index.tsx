import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ball from '@/components/ball'

import balls from "../services/balls"

export default function index() {
   const [ balls, setBalls] = useState<number[]>([])

   const pushRandoNumber = () => {
      for(let i = 0; i < 12; i++) {
         let randoNumber = Math.random() * 100
         balls.push(randoNumber)
      }
   }
   
   useEffect(() => {
      pushRandoNumber()
   })
   

  return (
    <View>
      <Ball number={10}></Ball>
    </View>
  )
}