import React, { useEffect } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, FlatList } from "react-native";

import { setPhotos } from "../store/reducers/photosReducer";
import { PhotoCard } from "../components/PhotoCard";

export const PhotosMainScreen = ({ navigation }) => {
  const photos = useSelector((state) => state.photos);

  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      const API_KEY = "kxl-SEnNCzuVyumKOg-lT9oAKv6CHhezNe3VdMDKmR0";
      fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
        .then((response) => response.json())
        .then((photos) => dispatch(setPhotos(photos)))
        .catch((err) => Alert.alert(`${err} occured`, "Please, try again"));
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ flex: 1, margin: 10 }}
            key={item.id}
            onPress={() => {
              navigation.navigate("Full Image", {
                itemUrl: item.urls.full,
              });
            }}
          >
            <PhotoCard {...item} />
          </TouchableOpacity>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 10,
  },
});
