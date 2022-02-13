import React from "react";
import Theme from "../../constants";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import { CATEGORIES, MEALS } from "../../data";
import MealItem from "../../components/MealItem";
interface ICategoriesSelected {
  id?: string;
  title?: string;
  color?: string;
}

const CatergoryMeal = (props: any) => {
  const categoryId: string = props.navigation.getParam("categoryMealId");

  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        data={itemData.item}
        moveToMeal={() => {
          props.navigation.navigate({
            routeName: "CatergoryMealDetails",
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };

  // get the unique item in the data
  const selectedCategory: ICategoriesSelected | undefined = CATEGORIES.find(
    (item) => item.id === categoryId
  );

  const selectedCategoryMeal = MEALS.filter(
    // @ts-ignore
    (meal) => meal.categoryIdList.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={selectedCategoryMeal}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

CatergoryMeal.navigationOptions = (navData: any) => {
  const navCategoryId: string = navData.navigation?.getParam("categoryMealId");

  const navSelectedCategory = CATEGORIES.find(
    (item) => item.id === navCategoryId
  );

  return {
    headerTitle: navSelectedCategory && navSelectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === "android"
          ? Theme.colors.primary
          : Theme.colors.secondary,
    },

    headerTitleStyle: {
      color:
        Platform.OS === "android"
          ? Theme.colors.secondary
          : Theme.colors.primary,
    },
  };
};

export default CatergoryMeal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
