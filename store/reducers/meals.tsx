import { MEALS } from "../../data";
import Meal from "../../models/mealModal";
import { TOOGLE_FAV_MEAL } from "../actions";

const intialState = {
  meals: MEALS,
  filters: MEALS,
  favMeals: [],
};

const mealReducer = (state = intialState, action: any) => {
  switch (action.type) {
    case TOOGLE_FAV_MEAL:
      const mealFound = state.meals.findIndex(
        (meal) => meal.id === action.mealId
      );

      // check if the index is present in Array
      if (mealFound >= 0) {
        //copy of array
        const updateMeals = [...state.favMeals];
        updateMeals.splice(mealFound, 1);
        return { ...state, favMeals: updateMeals };
      } else {
        const mealAvaliable: ConcatArray<never> | Meal | undefined =
          state.meals.find((meal) => meal.id === action.mealId);

        // @ts-ignore
        return { ...state, favMeals: state.favMeals.concat(mealAvaliable) };
      }
    default:
      return state;
  }
  return state;
};

export default mealReducer;
