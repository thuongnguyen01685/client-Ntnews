//import liraries
import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import Subtitle from "../common/Subtitle";
import Title from "../common/Title";

// create a component
const BlockCard = ({ style, imageStyle, item, onPress }) => {
  const { thumbnail, title, desc } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, style]}>
        <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <Subtitle>{desc}</Subtitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 300,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});

//make this component available to the app
export default BlockCard;
