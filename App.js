import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import store from "./app/store/store";
import { PhotosMainScreen } from './app/screens/PhotosMainScreen';

export default function App() {
  // const photos = useSelector(state => state.photos);
  // const [photos, setPhotos] = useState([]);
  // const dispatch = useDispatch();


  return (
    <Provider store={store}>
      <PhotosMainScreen/>
      {/* <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View> */}

    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

// const AppWrapper = () => {
//   return (
//     <Provider store={store}>
//       <App/>
//     </Provider>
//   );
// };
