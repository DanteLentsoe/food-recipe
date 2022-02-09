import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import Theme from "../../constants";
import { CATEGORIES } from "../../data";

const CatergoriesMain = (props: any) => {
  const showGridItems = (itemData: any) => {
    return (
      <>
        <TouchableOpacity
          style={styles.gridContainer}
          onPress={() => {
            props.navigation.navigate("CatergoryMealsScreen", {
              categoryMealId: itemData.item.id,
            });
          }}
        >
          <View>
            <Text>{itemData.item.title}</Text>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <FlatList data={CATEGORIES} numColumns={2} renderItem={showGridItems} />
  );
};

CatergoriesMain.navigationOptions = {
  headerTitle: "Meal Categories",
  headerStyle: {
    backgroundColor:
      Platform.OS === "android" ? Theme.colors.primary : Theme.colors.secondary,
  },
  headerTintColor: {
    color:
      Platform.OS === "android" ? Theme.colors.secondary : Theme.colors.primary,
  },
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
