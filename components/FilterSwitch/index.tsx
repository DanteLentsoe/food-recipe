import { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Theme from "../../constants";

const FilterSwitch = (props: any) => {
  return (
    <View style={styles.screen}>
      <View style={styles.filterContainer}>
        <Text>{props.title}</Text>
        <Switch
          value={props.value}
          onValueChange={props.onValueChange}
          trackColor={{ true: Theme.colors.primary }}
          thumbColor={Theme.colors.tertiary}
        />
      </View>
    </View>
  );
};

export default FilterSwitch;

const styles = StyleSheet.create({
  screen: {
    display: "flex",
    alignItems: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 25,
  },
});
