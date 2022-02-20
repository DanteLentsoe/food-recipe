import { MEALS } from "../../data";

const intialState = {
  meals: MEALS,
  filters: MEALS,
  favMeals: [],
};

const mealReducer = (state = intialState, action: () => void) => {
  return state;
};

export default mealReducer;
