import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CatergoryMeal = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Catergory Meal ................ </Text>
      <Button
        title="Catergory Details"
        onPress={() => {
          props.navigation.navigate("CatergoryMealDetails");
        }}
      />
    </View>
  );
};

export default CatergoryMeal;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
