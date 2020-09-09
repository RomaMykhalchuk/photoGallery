import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import store from "./app/store/store";
import { PhotosMainScreen } from "./app/screens/PhotosMainScreen";
import { DetailedPhoto } from "./app/screens/DetailedPhoto";
import { HeaderLogo } from "./app/components/HeaderLogo";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Photo Gallery"
            component={PhotosMainScreen}
            options={{
              headerLeft: () => <HeaderLogo />,
              headerStyle: {
                height: 100,
                backgroundColor: "tomato",
              },
              headerTitleStyle: {
                marginLeft: 70,
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#8eedce",
              },
            }}
          />
          <Stack.Screen
            name="Full Image"
            component={DetailedPhoto}
            options={{
              headerLeft: () => <HeaderLogo />,
              headerStyle: {
                height: 100,
                backgroundColor: "tomato",
              },
              headerTitleStyle: {
                marginLeft: 70,
                textTransform: "uppercase",
                fontWeight: "bold",
                color: "#8eedce",
              },
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
