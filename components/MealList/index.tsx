import { StyleSheet, FlatList, View, Text } from "react-native";
import MealItem from "../MealItem";

const MealList = (props: any) => {
  const renderMealItem = (itemData: any) => {
    return (
      <MealItem
        data={itemData.item}
        moveToMeal={() => {
          props.navigation.navigate({
            routeName: "CatergoryMealDetails",
            params: { mealId: itemData.item.id },
          });
        }}
      />
    );
  };

  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={props.dataList}
          renderItem={renderMealItem}
          style={{ width: "100%" }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
