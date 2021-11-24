//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlockCard from "./cards/BlockCard";
import { useNavigation } from "@react-navigation/native";

// create a component
const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      onPress={() => navigation.navigate("NewsDetail", { item })}
      item={item}
      style={{ marginVertical: 15 }}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default FeaturedNews;
