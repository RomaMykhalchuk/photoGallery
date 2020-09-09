import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./app/store/store";
import { PhotosMainScreen } from "./app/screens/PhotosMainScreen";
import { DetailedPhoto } from "./app/screens/DetailedPhoto";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={PhotosMainScreen} />
          <Stack.Screen name="DetailedPhoto" component={DetailedPhoto} />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}