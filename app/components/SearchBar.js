import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import newsApi from "../api/newsApi";
import SearchModel from "./common/SearchModel";

let timeoutId;

const debounce = (func, delay) => {
  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(null, args);
    }, delay);
  };
};
const SearchBar = ({ setSearchFocused }) => {
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState([]);
  const [notFound, setNotFound] = useState("");
  const handleChange = ({ nativeEvent }) => {
    const { text } = nativeEvent;
    setQuery(text);
    setVisible(true);
    debounceSearch(query);
  };

  const handleSearch = async (value) => {
    const res = await newsApi.searchPost(value);
    if (res.success) {
      setNotFound("");
      setData(res.news);
    }
    if (!res.success) {
      setNotFound(res.message);
    }
  };
  const debounceSearch = debounce(handleSearch, 500);
  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={query}
          style={styles.searchInput}
          placeholder="Tìm kiếm ở đây..."
          onChange={handleChange}
          onFocus={() => {
            setSearchFocused(true);
          }}
          onBlur={() => {
            setSearchFocused(false);
            setQuery("");
            setVisible(false);
            setData([]);
            setNotFound("");
          }}
        />
      </View>
      <SearchModel visible={visible} data={data} notFound={notFound} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 8,
    justifyContent: "center",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingLeft: 8,
    fontSize: 16,
  },
});

export default SearchBar;
