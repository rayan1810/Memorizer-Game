import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  container: {
    margin: 12,
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  spacer: {
    flex: 1,
  },
});
