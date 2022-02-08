import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [isFontLoaded, setFontLoaded] = useState(false);

  // get custom font
  const getFont = async () => {
    if (!isFontLoaded) {
      Font.loadAsync({
        string: require("./assets/font"),
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
    <View style={styles.container}>
      <Text>Main</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
