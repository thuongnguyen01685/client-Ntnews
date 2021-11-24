//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import FlatCard from "../cards/FlatCard";
import Title from "../common/Title";
import VerticalCard from "../cards/VerticalCard";
import { useNavigation } from "@react-navigation/native";

// create a component
const VerticalList = ({ title, data }) => {
  const navigation = useNavigation();
  return (
    <View>
      {title && <Title>{title}</Title>}
      <View style={styles.container}>
        {data.map((item) => (
          <VerticalCard
            onPress={() => navigation.navigate("NewsDetail", { item })}
            item={item}
            key={item.id}
          />
        ))}
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
});

//make this component available to the app
export default VerticalList;
