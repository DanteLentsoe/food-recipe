import React, { useEffect } from "react";
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
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import { useSelector } from "react-redux";

const ListItem = (props: any) => {
  return (
    <View style={styles.listContainer}>
      <Text>{props.children}</Text>
    </View>
  );
};

const CatergoriesDetails = (props: any) => {
  const { navigation } = props;

  const allMeals = useSelector((state: any) => {
    return state.allmeals.meals;
  });

  const mealIdRef = props.navigation.getParam("mealId");

  // get specific meal
  const individualMeal = allMeals.find((meal: any) => meal.id === mealIdRef);

  // push params for navigation title
  useEffect(() => {
    navigation.setParams({
      mealCategoryTitle: individualMeal.title,
    });
  }, [individualMeal]);

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
      <Text style={styles.title}>Ingredients</Text>
      <Text style={styles.subTitle}>List of ingredients:</Text>
      {individualMeal &&
        individualMeal.ingredients.map((ingredient: string, index: number) => {
          return <ListItem key={index}>{ingredient}</ListItem>;
        })}
      <Text style={styles.title}>Steps</Text>
      <Text style={styles.subTitle}>List of Steps:</Text>
      {individualMeal &&
        individualMeal.instructions.map(
          (instructions: string, index: number) => {
            return <ListItem key={index}>{instructions}</ListItem>;
          }
        )}
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
  //get meal by id
  const navCategoryId: string = navData.navigation?.getParam("mealId");

  // get meal title by id
  const mealTitleCategory: string =
    navData.navigation?.getParam("mealCategoryTitle");

  return {
    headerTitle: mealTitleCategory,
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
  title: {
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    textAlign: "center",
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ccc",
  },
  subTitle: {
    left: 10,
    padding: 5,
    fontSize: 17,
  },
});
