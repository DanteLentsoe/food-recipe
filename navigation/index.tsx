import { Platform } from "react-native";
import Theme from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CatergoriesMain from "../screens/CategoriesMain";
import CatergoryMeals from "../screens/CategoryMeal";
import CatergoriesDetails from "../screens/CategoryDetails";
import Favorites from "../screens/Favorites";
import Filter from "../screens/Filter";

const defaultNavigationStack = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor:
        Platform.OS === "android" && Platform.Version >= 21
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
};

const MealNavigation = createStackNavigator(
  {
    Catergories: {
      screen: CatergoriesMain,
    },
    CatergoryMealsScreen: {
      screen: CatergoryMeals,
      navigationOptions: {},
    },
    // @ts-ignore
    CatergoryMealDetails: CatergoriesDetails,
  },
  defaultNavigationStack
);

// Favorite Screen Stack Settings
const FavStack = createStackNavigator(
  {
    FavoriteMeals: Favorites,
    // @ts-ignore
    MealDetailsScreen: CatergoriesDetails,
  },
  defaultNavigationStack
);

const tabsConfiguration = {
  MainTab: {
    screen: MealNavigation,
    navigationOptions: {
      tabBarLabel: "All Meals",
      tabBarIcon: (tabData: any) => {
        return (
          <Ionicons name="ios-restaurant" size={25} color={tabData.tintColor} />
        );
      },
    },
  },
  FavTab: {
    screen: FavStack,
    navigationOptions: {
      tabBarLabel: "Favorites",
      tabBarIcon: (tabData: any) => {
        return <Ionicons name="ios-star" size={25} color={tabData.tintColor} />;
      },
    },
  },
};

const NavTabs = createBottomTabNavigator(tabsConfiguration, {
  tabBarOptions: {
    activeTintColor: Theme.colors.tertiary,
  },
});

const FilterScreenNav = createStackNavigator({
  Filter: Filter,
});

const SideDrawer = createDrawerNavigator({
  DrawerMain: NavTabs,
  Filters: FilterScreenNav,
});

export default createAppContainer(SideDrawer);
