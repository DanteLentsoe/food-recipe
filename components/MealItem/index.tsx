import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = (props: any) => {
  return (
    <>
      <View style={styles.mealContainer}>
        <TouchableOpacity
          onPress={() => {
            props.moveToMeal();
          }}
        >
          <View style={{ ...styles.itemGrid, ...styles.itemImg }}>
            <ImageBackground
              source={{ uri: props.data.imgPath }}
              style={styles.imgStyles}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.title} numberOfLines={1}>
                  {props.data.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.itemGrid, ...styles.mealDetail }}>
            <Text>{props.data.duration}.. s</Text>
            <Text>{props.data.difficulty.toUpperCase()}</Text>
            <Text>{props.data.budget.toUpperCase()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "monospace",
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },
  titleContainer: {
    backgroundColor: "'rgba(0,0,0,0.6)",
    paddingVertical: 4,
    paddingHorizontal: 14,
  },
  mealContainer: {
    height: 250,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    overflow: "hidden",
    marginTop: 20,
  },
  itemGrid: {
    flexDirection: "row",
  },
  itemImg: {
    height: "80%",
  },
  mealDetail: {
    paddingHorizontal: 12,
    justifyContent: "space-between",
    alignItems: "center",
    height: "20%",
  },
  imgStyles: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});
