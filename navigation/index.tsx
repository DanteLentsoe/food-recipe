import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CatergoriesMain from "../screens/CategoriesMain";
import CatergoryMeals from "../screens/CategoryMeal";
import CatergoriesDetails from "../screens/CategoryDetails";

const MealNavigation = createStackNavigator({
  Catergories: CatergoriesMain,
  CatergoryMealsScreen: {
    screen: CatergoryMeals,
  },
  CatergoryMealDetails: CatergoriesDetails,
});

export default createAppContainer(MealNavigation);
