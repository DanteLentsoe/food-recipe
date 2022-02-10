import { Platform } from "react-native";
import Theme from "../constants";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CatergoriesMain from "../screens/CategoriesMain";
import CatergoryMeals from "../screens/CategoryMeal";
import CatergoriesDetails from "../screens/CategoryDetails";

const MealNavigation = createStackNavigator(
  {
    Catergories: {
      screen: CatergoriesMain,
    },
    CatergoryMealsScreen: {
      screen: CatergoryMeals,
      navigationOptions: {},
    },
    CatergoryMealDetails: CatergoriesDetails,
  },
  {
    defaultNavigationOptions: {
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
    },
  }
);

export default createAppContainer(MealNavigation);
