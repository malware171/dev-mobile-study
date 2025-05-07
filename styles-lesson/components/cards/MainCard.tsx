import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Card from "../Card";

type MainCardProps = {
  title: string;
  participating: number;
  imgUrl: string;
  name: string;
  hp: number;
  damageDone: number;
};

export default function MainCard({title, participating, imgUrl, name, hp, damageDone}: MainCardProps) {
  return (
    <Card>
      <View style={styles.container}>
        <View style = {styles.containerCenter}>
          <Text>{title}</Text>
          <Text style= {styles.subtitle}>{participating}/10 Participating</Text>
        </View>
        

        <Image source={{ uri: imgUrl }} width={150} height={150} />

        <View style={styles.statsContainer}>
          <View style={styles.icon}>
            <MaterialCommunityIcons name="sword" size={35} color="black" />
          </View>
          
          <View style={styles.statsRight}>
            <Text>{name}</Text>

            <View style={styles.barContainer}>
              <View style={{ ...styles.bar2, width: "85%" }} />
              <View style={{ ...styles.bar, width: "70%" }} />
            </View>

            <Text style= {styles.subtitle}>{hp} / 1500 HP</Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style = { styles.footerText}>{damageDone} Damage Done</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 16,
  },
  containerCenter: {
    alignItems: "center",
  },
  statsContainer: {
    flexDirection: "row",
    width: "100%",
  },
  statsRight: {
    flex: 1,
    gap: 5
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  barContainer: {
    width: "100%",
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgb(225 224 227)",
    position: "relative",
  },
  bar: {
    backgroundColor: "rgb(255 97 101)",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  bar2: {
    backgroundColor: "orange",
    height: 8,
    borderRadius: 4,
    position: "absolute",
  },
  subtitle: {
    color: "rgb(159 155 167)",
  },
  footer: {
    backgroundColor: "rgb(255 166 36)",
    width: "100%",
    color: "white",
    alignContent: "center",
    alignItems: "center",
    padding: 8,
    borderBottomStartRadius: 10,
    borderBottomRightRadius: 10
  },
  footerText: {
    color: "white",
    fontSize: 12

  },
});
