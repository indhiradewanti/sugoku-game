import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View } from "react-native";
import store from "./store/index";
import { Provider } from "react-redux";
import GamePlay from "./screen/game";
import Home from "./screen/home";
import Finish from "./screen/finish";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Game" component={GamePlay} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Finish" component={Finish} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}
