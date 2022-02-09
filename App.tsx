import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MealNavigation from "./navigation";
export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  // get custom font
  const getFont = async () => {
    if (!isFontLoaded) {
      Font.loadAsync({
        "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
        "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
      });
    }
  };

  // keep splash screen till font is loaded
  <AppLoading
    startAsync={getFont}
    onError={(err) => err}
    onFinish={() => setFontLoaded(true)}
  />;

  return (
    <>
      <MealNavigation />
    </>
  );
}
