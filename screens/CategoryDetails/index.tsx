import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CatergoriesDetails = (props: any) => {
  return (
    <View style={styles.container}>
      <Text>Catergories Details Meal</Text>
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
