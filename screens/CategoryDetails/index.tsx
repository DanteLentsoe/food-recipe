import React from "react";
import {
  ScrollView,
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import Theme from "../../constants";
import { MEALS } from "../../data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";

const CatergoriesDetails = (props: any) => {
  const mealIdRef = props.navigation.getParam("mealId");

  const individualMeal = MEALS.find((meal) => meal.id === mealIdRef);
  return (
    <ScrollView>
      <Image
        source={{ uri: individualMeal && individualMeal.imgPath }}
        style={styles.img}
      />
      <View style={{ ...styles.itemGrid, ...styles.mealDetail }}>
        <Text>{individualMeal && individualMeal.duration}.. s</Text>
        <Text>{individualMeal && individualMeal.difficulty.toUpperCase()}</Text>
        <Text>{individualMeal && individualMeal.budget.toUpperCase()}</Text>
      </View>
      <Text>Ingredients</Text>
      <Text>List of ingredients</Text>
      <Text>Steps</Text>
      <Text>List of Steps</Text>
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
    </ScrollView>
  );
};

export default CatergoriesDetails;

CatergoriesDetails.navigationOptions = (navData: any) => {
  const navCategoryId: string = navData.navigation?.getParam("mealId");

  const navSelectedCategory = MEALS.find((item) => {
    return item.id === navCategoryId;
  });

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
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="back"
          iconName="ios-star"
          onPress={() => {
            console.log("check heck");
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  itemGrid: {
    flexDirection: "row",
    padding: 12,
    justifyContent: "space-around",
  },
  itemImg: {
    height: "80%",
  },
  img: {
    width: "100%",
    height: 200,
  },
  mealDetail: {},
});
