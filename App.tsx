import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { MenuScreen, GameScreen } from "./src/screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ title: "Memorizer" }}
          name="Menu"
          component={MenuScreen}
        />
        <Stack.Screen
          options={{ title: "Game Board" }}
          name="gameroom"
          component={GameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
