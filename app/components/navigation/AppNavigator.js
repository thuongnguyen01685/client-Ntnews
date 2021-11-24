//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import NewsList from "../lists/NewsList";
import NewsDetail from "../screens/NewsDetail";
import Home from "../screens/Home";

const Stack = createStackNavigator();

// create a component
const AppNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTitle: "",
        headerTintColor: "white",
        headerLeftContainerStyle: {
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: "rgba(92, 90, 91, 0.7)",
        },
      }}>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={Home}
      />
      <Stack.Screen name="NewsDetail" component={NewsDetail} />
      <Stack.Screen name="NewsList" component={NewsList} />
    </Stack.Navigator>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default AppNavigator;
