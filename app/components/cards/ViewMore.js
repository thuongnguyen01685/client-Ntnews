//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableWithoutFeedback } from "react-native";

// create a component
const ViewMore = ({ style, onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>View More</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    width: "100%",
    backgroundColor: "white",
    height: 50,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7a74e0",
  },
});

//make this component available to the app
export default ViewMore;
