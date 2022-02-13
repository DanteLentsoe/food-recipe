import React from "react";
import { View, Text, Button, StyleSheet, Platform } from "react-native";
import Theme from "../../constants";
import { MEALS } from "../../data";

const CatergoriesDetails = (props: any) => {
  const mealIdRef = props.navigation.getParam("mealId");

  const individualMeal = MEALS.find((meal) => meal.id === mealIdRef);
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

CatergoriesDetails.navigationOptions = (navData: any) => {
  const navCategoryId: string = navData.navigation?.getParam("categoryMealId");

  const navSelectedCategory = MEALS.find((item) => item.id === navCategoryId);

  console.log("type check ", navSelectedCategory);

  return {
    headerTitle: navSelectedCategory && navSelectedCategory.title,
    headerStyle: {
      backgroundColor:
        Platform.OS === "android"
          ? Theme.colors.primary
          : Theme.colors.secondary,
    },

    headerTitleStyle: {
      color:
        Platform.OS === "android"
          ? Theme.colors.secondary
          : Theme.colors.primary,
    },
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
