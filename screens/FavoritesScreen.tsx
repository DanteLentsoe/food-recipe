import { Text } from "react-native";
import React, { useContext } from "react";
import MealList from "../components/MealsList";
import { FavoritesContext } from "../store/context/FavoriteScreenProvider";
import { MEALS } from "../data/dummy-data";

function FavoritesScreen() {
  const favContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((mealID) =>
    favContext.ids.includes(mealID.id)
  );
  return <MealList items={favoriteMeals} />;
}

export default FavoritesScreen;
