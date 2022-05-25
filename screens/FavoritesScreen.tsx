import { Text, View } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealsList";
import { FavoritesContext } from "../store/context/FavoriteScreenProvider";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((mealID) =>
    favContext.ids.includes(mealID.id)
  );

  const nullData = (
    <>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, color: "#ffffff" }}>
          No Favorite Meals Selected
        </Text>
      </View>
    </>
  );
  return (
    <>
      {favoriteMeals.length > 0 ? <MealList items={favoriteMeals} /> : nullData}
    </>
  );
}

export default FavoritesScreen;
