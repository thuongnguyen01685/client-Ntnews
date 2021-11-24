//import liraries
import React, { Component, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import useNews from "../../hooks/useNews";
import BreakingNews from "../BreakingNews";
import ActivityIndicator from "../common/ActivityIndicator";
import Screen from "../common/Screen";
import EntertainmentNews from "../EntertainmentNews";
import FeaturedNews from "../FeaturedNews";
import PoliticalNews from "../PoliticalNews";
import SearchBar from "../SearchBar";
import TechNews from "../TechNews";

// create a component
const Home = () => {
  const [isSearchFocused, setSearchFocused] = useState(false);
  const [
    featuredNews,
    politicalNews,
    entertainmentNews,
    techNews,
    breakingNews,
    loading,
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={isSearchFocused}>
        <SearchBar setSearchFocused={setSearchFocused} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default Home;
