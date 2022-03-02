import React from "react";
import Theme from "../../constants";
import { StyleSheet, Platform } from "react-native";
import { CATEGORIES, MEALS } from "../../data";
import MealList from "../../components/MealList";
import { useSelector } from "react-redux";
interface ICategoriesSelected {
  id?: string;
  title?: string;
  color?: string;
}

const CatergoryMeal = (props: any) => {
  const listedMeals = useSelector((state: any) => {
    return state.allmeals.filters;
  });
  const categoryId: string = props.navigation.getParam("categoryMealId");

  const selectedCategoryMeal = listedMeals.filter(
    // @ts-ignore
    (meal) => meal.categoryIdList.indexOf(categoryId) >= 0
  );

  return (
    <MealList dataList={selectedCategoryMeal} navigation={props.navigation} />
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
