import * as React from "react";
import { View, Button } from "react-native";
import { Style } from "./styles";

export function MenuScreen({ navigation }: any) {
  return (
    <View style={Style.container}>
      <Button
        title="Start the Game"
        onPress={() => navigation.navigate("gameroom")}
      />
    </View>
  );
}
