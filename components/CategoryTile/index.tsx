import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const CatergoryTile = (props: any) => {
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback;
  }
  return (
    <>
      <View style={styles.gridContainer}>
        <TouchableComponent
          style={{ flex: 1 }}
          onPress={() => {
            props.onPress();
          }}
        >
          <View style={{ ...styles.container, backgroundColor: props.hue }}>
            <Text style={styles.title}>{props.title}</Text>
          </View>
        </TouchableComponent>
      </View>
    </>
  );
};

export default CatergoryTile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,

    padding: 11,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  title: {
    // fontFamily: "monospace",
    fontSize: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 15,
    height: 120,
    borderRadius: 10,
    elevation: 5,
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
});
