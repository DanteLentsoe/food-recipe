import React from "react";
import { StyleSheet, FlatList } from "react-native";
import CatergoryTile from "../../components/CategoryTile";
import { CATEGORIES } from "../../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const CatergoriesMain = (props: any) => {
  const showGridItems = (itemData: any) => {
    return (
      <>
        <CatergoryTile
          title={itemData.item.title}
          hue={itemData.item.color}
          onPress={() => {
            props.navigation.navigate("CatergoryMealsScreen", {
              categoryMealId: itemData.item.id,
            });
          }}
        />
      </>
    );
  };
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={showGridItems} />
  );
};

CatergoriesMain.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Meal Categories",
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

export default CatergoriesMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  gridContainer: {
    flex: 1,
    margin: 15,
    height: 120,
  },
});
