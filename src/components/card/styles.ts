import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
  invalid: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    padding: 20,
    margin: 10,
    backgroundColor: "#e11d48",
  },
  matched: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    padding: 20,
    margin: 10,
    backgroundColor: "#22c55e",
  },
  active: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    padding: 20,
    margin: 10,
    backgroundColor: "#67e8f9",
  },
  default: {
    backgroundColor: "#e2e8f0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    padding: 20,
    margin: 10,
  },
  cardPressable: {
    width: 100,
    height: 100,
  },
});
