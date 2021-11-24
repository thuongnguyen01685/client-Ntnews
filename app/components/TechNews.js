//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import HorizotalList from "./lists/HorizotalList";

// create a component
const TechNews = ({ data }) => {
  return <HorizotalList title="Tech News" data={data} />;
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default TechNews;
