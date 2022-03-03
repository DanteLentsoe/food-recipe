import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealNavigation from "./navigation";
import { enableScreens } from "react-native-screens";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealReducer from "./store/reducers/meals";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  allmeals: mealReducer,
});
const store = createStore(rootReducer, composeWithDevTools());

enableScreens();
// get custom font
const getFont = async () => {
  return Font.loadAsync({
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
};

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  if (!isFontLoaded) {
    // keep splash screen till font is loaded
    <AppLoading
      startAsync={getFont}
      onError={(err) => err}
      onFinish={() => setFontLoaded(true)}
    />;
  }

  return (
    <>
      <Provider store={store}>
        <MealNavigation />
      </Provider>
    </>
  );
}
