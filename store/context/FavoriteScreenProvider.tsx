import React, { createContext, useState } from "react";

interface IMeals {
  id?: string;
  categoryIds: Array<string>;
  title: string;
  imageUrl: string;
  ingredients: string;
  steps: Array<string>;
  duration: number;
  complexity: string;
  affordability: any;
  isGlutenFree: boolean;
  isVegan: boolean;
  isVegetarian: boolean;
  isLactoseFree: boolean;
}

const intialState = {
  ids: [],
  addFavorite: (id: string) => {},
  removeFavoriteMeal: (id: string) => {},
};
export const FavoritesContext = createContext(intialState);

const FavoriteProvider = ({ children }) => {
  const [favoriteMealIDS, setFavoriteMealIDS] = useState<Array<string>>([]);

  const addFavoriteMeal = (id: string) => {
    setFavoriteMealIDS((previousFavoriteIDS) => [...previousFavoriteIDS, id]);
  };
  const removeFavoriteMeal = (id: string) => {
    setFavoriteMealIDS((previousFavoriteIDS) =>
      previousFavoriteIDS.filter((mealID: string) => mealID !== id)
    );
  };

  const values = {
    ids: favoriteMealIDS,
    addFavorite: addFavoriteMeal,
    removeFavoriteMeal: removeFavoriteMeal,
  };
  return (
    <FavoritesContext.Provider value={values}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoriteProvider;
