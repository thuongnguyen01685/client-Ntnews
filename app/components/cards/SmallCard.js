//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import BlockCard from "./BlockCard";
import ViewMore from "./ViewMore";
import newsApi from "../../api/newsApi";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");
// create a component
const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();
  const handleViewMore = async (category) => {
    const result = await newsApi.getByCategory(category);
    navigation.navigate("NewsList", result);
  };
  if (item.type === "viewMore") {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }
  return (
    <BlockCard
      onPress={onPress}
      item={item}
      style={styles.container}
      imageStyle={styles.image}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: width / 2,
    height: 200,
  },
});

//make this component available to the app
export default SmallCard;
