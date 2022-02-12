import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { MEALS } from "../../data";

const CatergoriesDetails = (props: any) => {
  const mealIdRef = props.navigation.getParam("mealId");

  const individualMeal = MEALS.find((meal) => meal.id === mealIdRef);
  console.log("meal ID props ", individualMeal);
  return (
    <View style={styles.container}>
      <Text>{individualMeal && individualMeal.title}</Text>
      <Button
        title="Catergory Details"
        onPress={() => {
          props.navigation.navigate("CatergoryMealsScreen");
        }}
      />
      <Button
        title="Back "
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
};

export default CatergoriesDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
