import React from "react";
import MealList from "../../components/MealList";
import { MEALS } from "../../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const Favorites = (props: any) => {
  const selectedFavMeal = MEALS.filter((meal) => meal.id === "m1");

  return <MealList dataList={selectedFavMeal} navigation={props.navigation} />;
};

export default Favorites;

Favorites.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Favorite Meals",
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
