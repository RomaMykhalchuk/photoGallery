import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import store from "./app/store/store";
import { PhotosMainScreen } from "./app/screens/PhotosMainScreen";

export default function App() {
  // const photos = useSelector(state => state.photos);
  // const [photos, setPhotos] = useState([]);
  // const dispatch = useDispatch();

  return (
    <NavigationContainer>
      <Provider store={store}>

        <PhotosMainScreen />
      </Provider>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
