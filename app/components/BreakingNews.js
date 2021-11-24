//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizotalList from "./lists/HorizotalList";

// create a component
const BreakingNews = ({ data }) => {
  return <HorizotalList title="Breaking News" data={data} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#2c3e50",
  },
});

//make this component available to the app
export default BreakingNews;
