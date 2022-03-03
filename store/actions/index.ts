export const TOOGLE_FAV_MEAL = "TOOGLE_FAV_MEAL";

// Fav meals identifier
export const toogleFavMeal = (id: string) => {
  return { title: TOOGLE_FAV_MEAL, mealIdRef: id, payload: id };
};
