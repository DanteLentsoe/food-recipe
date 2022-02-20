import { useState, useEffect, useCallback } from "react";
import { Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../../components/HeaderButton";
import FilterSwitch from "../../components/FilterSwitch";
import Theme from "../../constants";

const Filter = (props: any) => {
  const { navigation } = props;
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  // function to store para values
  const filterHandler = useCallback(
    (props: any) => {
      const filters = {
        vegan: isVegan,
        veg: isVegetarian,
        gluten: isGlutenFree,
        lactose: isLactoseFree,
      };

      console.log("filters ", filters);
    },
    [isGlutenFree, isVegan, isLactoseFree, isVegetarian]
  );

  // call filter parameters on each render to store current state
  useEffect(() => {
    navigation.setParams({
      saved: filterHandler,
    });
  }, [filterHandler]);

  return (
    <>
      <Text style={styles.title}> Filter Meal Types</Text>
      <FilterSwitch
        value={isGlutenFree}
        onValueChange={(value: boolean) => setGlutenFree(value)}
        title={"Gluten Free"}
      />
      <FilterSwitch
        value={isLactoseFree}
        onValueChange={(value: boolean) => setIsLactoseFree(value)}
        title={"Lactose Free"}
      />
      <FilterSwitch
        value={isVegan}
        onValueChange={(value: boolean) => setIsVegan(value)}
        title={"Vegan"}
      />
      <FilterSwitch
        value={isVegetarian}
        onValueChange={(value: boolean) => setIsVegetarian(value)}
        title={"Vegeterian"}
      />
    </>
  );
};

export default Filter;

Filter.navigationOptions = (navData: any) => {
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="back"
          iconName="ios-menu"
          onPress={() => {
            navData.navigation.openDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Save"
          iconName="ios-save"
          color={Theme.colors.tertiary}
          onPress={() => {
            navData.navigation.getParam("saved")();
          }}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
});
