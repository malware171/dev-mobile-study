import { View, Text, StyleSheet, Image } from "react-native";
import React, { PropsWithChildren } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface CardProps {
  imgUrl: string
  title: string
  userName: string
  level: number
  role: string
  nameIcon: string

}

export default function MemberCard({ imgUrl, title, userName, level, role, nameIcon}: CardProps) {
  return(
    <View style={styles.container}>
      
      <Image source={{ uri: imgUrl }} style={styles.image}/>
      
      <View style = {styles.profileInfo}>
        <View>
          <Text style = {styles.title}>{title}</Text>

          <View style = {styles.containerSubtitle}>
            <Text style = {styles.userName}>@{userName}</Text>

            <View style={styles.icones}>
              <View>
                <MaterialCommunityIcons name= {nameIcon as any} size={18} color="#FF4A4A"/>
              </View>
              <View style = {styles.upIcon}>
                <MaterialCommunityIcons name="arrow-up-bold" size={16} color="#B35CFF"/>
              </View>
            </View>
          </View>
        </View>

        <View style ={styles.barContainer}>
          <View style ={styles.barBackground}>
            <View style={styles.healthBar}></View>
          </View>

          <View style ={styles.barBackground}>
            <View style={styles.levelhBar}></View>
          </View>
        </View>
        
        <View style = {styles.containerSubtitle}>
          <Text style = {styles.statsText}>Level {level}</Text>

          <Text style = {styles.statsText}>{role}</Text>
        </View>
      </View>
    </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "rgb(249 249 249)",
    padding: 16,
    borderRadius: 12,
    maxWidth: "100%",
    marginBottom: 10
  },
  profileInfo: {
    flex: 1,
    gap: 5
  },
  title:{
    fontWeight: "500",
    fontSize: 16,
  },
  containerSubtitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  },
  userName: {
    color: "#B3B3B3",
  },
  statsText: {
    color: "#9C9C9C",
    fontSize: 12
  },
  icones: {
    flexDirection: "row",
    gap: 5,
  },
  image: {
    width: 80, 
    height: 80,
    marginRight: 16
  },
  barContainer: {
    gap: 8
  },
  barBackground: {
    backgroundColor: "rgb(225 224 227)",
    width: "100%",
    borderRadius: 8,
    height: 6,
    position: "relative"
  },
  healthBar: {
    backgroundColor: "rgb(255 97 101)",
    width: "100%",
    borderRadius: 8,
    height: 6,
    position: "absolute"
  },
  levelhBar: {
    backgroundColor: "#5BADFF",
    width: "65%",
    borderRadius: 8,
    height: 6,
    position: "absolute"
  },
  upIcon: {
    alignContent: "center",
    backgroundColor: "#EAEAEA",
    borderRadius: 5,
  }
});
