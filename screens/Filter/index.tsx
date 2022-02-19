import React from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const Filter = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}> Filter </Text>
      <View style={styles.filterContainer}>
        <Text>Gluten Free</Text>
        <Switch />
      </View>
    </View>
  );
};

export default Filter;

Filter.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="back"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.openDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
