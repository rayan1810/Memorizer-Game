import React from "react";
import { View, Text, Pressable } from "react-native";
import { Style } from "./styles";

export const Card = ({
  item,
  id,
  handleFlip,
  gameInactive,
}: {
  item: {
    id: number;
    status: "active" | "matched" | "invalid" | "";
    value: string;
  };
  id: number;
  handleFlip: any;
  gameInactive: boolean;
}) => {
  let activeStyle = Style.default;
  switch (item.status) {
    case "invalid":
      activeStyle = Style.invalid;
      break;
    case "matched":
      activeStyle = Style.matched;
      break;
    case "active":
      activeStyle = Style.active;
      break;
    default:
      activeStyle = Style.default;
  }
  return (
    <Pressable
      disabled={item.status !== "" || gameInactive ? true : false}
      style={Style.cardPressable}
      onPress={() => handleFlip(id)}
    >
      <View style={activeStyle}>
        {(item.status === "matched" ||
          item.status === "active" ||
          item.status === "invalid") && <Text>{item.value}</Text>}
      </View>
    </Pressable>
  );
};
