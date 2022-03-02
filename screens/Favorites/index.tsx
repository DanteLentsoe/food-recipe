import React from "react";
import MealList from "../../components/MealList";
import { MEALS } from "../../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import { useSelector } from "react-redux";

const Favorites = (props: any) => {
  // get stored fav meals from store
  const favMeals = useSelector((state: any) => {
    return state.allmeals.favMeals;
  });

  return <MealList dataList={favMeals} navigation={props.navigation} />;
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
