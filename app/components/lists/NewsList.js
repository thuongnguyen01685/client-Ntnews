//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import VerticalList from "../lists/VerticalList";

// create a component
const NewsList = ({ route }) => {
  const data = route.params;
  const header = data[0].category.split("-").join(" ").toUpperCase();
  return (
    <>
      <View style={styles.headerContainer}>
        <Text style={styles.categoryTitle}>{header}</Text>
      </View>
      <ScrollView contentContainerStyle={{ padding: 15 }}>
        <VerticalList data={data} />
      </ScrollView>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#4e4d4d",
  },
  categoryTitle: {
    fontSize: 30,
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "white",
  },
});

//make this component available to the app
export default NewsList;
