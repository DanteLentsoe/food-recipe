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

const ListItem = (props: any) => {
  return (
    <View style={styles.listContainer}>
      <Text>{props.children}</Text>
    </View>
  );
};

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
