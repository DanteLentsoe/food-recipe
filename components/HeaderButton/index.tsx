import { HeaderButton } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { Platform } from "react-native";
import Theme from "../../constants";

const HeaderButtonMain = (props: any) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={
        Platform.OS === "android"
          ? Theme.colors.secondary
          : Theme.colors.primary
      }
    />
  );
};

export default HeaderButtonMain;
