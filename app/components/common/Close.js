//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// create a component
const Close = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <AntDesign
        name="close"
        size={24}
        color="white"
        style={styles.icon}
        onPress={onPress}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    marginVertical: 20,
  },
  icon: {
    backgroundColor: "rgba(92,90,91,0.7)",
    padding: 10,
    borderRadius: 50,
  },
});

//make this component available to the app
export default Close;
