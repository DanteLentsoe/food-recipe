import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { CATEGORIES } from "../../data";

interface ICategoriesSelected {
  id?: string;
  title?: string;
  color?: string;
}

const CatergoryMeal = (props: any) => {
  const categoryId: string = props.navigation.getParam("categoryMealId");

  // get the unique item in the data
  const selectedCategory: ICategoriesSelected | undefined = CATEGORIES.find(
    (item) => item.id === categoryId
  );

  return (
    <View style={styles.container}>
      <Text>{selectedCategory && selectedCategory.title}</Text>
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
