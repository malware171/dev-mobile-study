import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import ScreenWrapper from "@/components/ScreenWrapper";
import Card from "@/components/Card";
import Title from "@/components/Title";
import MainCard from "@/components/cards/MainCard";
import Button from "@/components/buttons/Button";
import MemberCard from "@/components/cards/MemberCard";

export default function index() {
  return (
    <ScreenWrapper title="Your Party">
      <MainCard
        title="Vice Awakens"
        participating={3}
        imgUrl="https://res.cloudinary.com/duposs86e/image/upload/v1745452062/roqkx7r2c1oal4fopndk.png"
        name="Vice, The Shadow Wyrm"
        hp={1224}
        damageDone={21}
      />

      <Title>MEMBERS</Title>
      
      <Button text="Invite a Member"></Button>
      
        <MemberCard 
          imgUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0dd7779-62ce-46e3-bae4-2086001edf0f/deqn7de-2b285cb2-b52b-4cf6-8adc-d6f71a36cf19.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwZGQ3Nzc5LTYyY2UtNDZlMy1iYWU0LTIwODYwMDFlZGYwZlwvZGVxbjdkZS0yYjI4NWNiMi1iNTJiLTRjZjYtOGFkYy1kNmY3MWEzNmNmMTkuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.320ZnffXCF74C7Osh8c0HlEuS-LDx31DqIbPPwar3Po"
          level={12}
          role="Leader"
          title="Sophiala"
          userName="bestie"
          nameIcon="sword"
        />

        <MemberCard 
          imgUrl="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91da2d4d-82aa-44d2-bcd9-5ba225eaedeb/dj86s4y-b4d28c44-3950-4348-a5c6-a5191ef9e284.png/v1/fill/w_1280,h_1280,q_80,strp/no_sobrevivi_al_mar_purpura_by_belmakamont_dj86s4y-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzkxZGEyZDRkLTgyYWEtNDRkMi1iY2Q5LTViYTIyNWVhZWRlYlwvZGo4NnM0eS1iNGQyOGM0NC0zOTUwLTQzNDgtYTVjNi1hNTE5MWVmOWUyODQucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.X2gFO1QCr7rU81Zj_CdObqiNQEN49Qk-s79BrMirW3Y"
          level={15}
          role="Leader"
          title="Aidowu"
          userName="getthabread"
          nameIcon="sword"
        />  
      
      
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  cardsContainer: {
    gap: 10
  }
})
