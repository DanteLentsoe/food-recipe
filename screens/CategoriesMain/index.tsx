import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../../data";

const showGridItems = (itemData: any) => {
  return (
    <>
      <View style={styles.container}>
        <Text>{itemData.item.title}</Text>
      </View>
    </>
  );
};

const CatergoriesMain = (props: any) => {
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={showGridItems} />
  );
};

export default CatergoriesMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
