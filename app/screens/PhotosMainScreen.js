import React, { useEffect } from "react";
import { Text, View, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, FlatList } from "react-native";

import { setPhotos } from "../store/reducers/photosReducer";
import { PhotoCard } from "../components/PhotoCard";
import { DetailedPhoto } from "../screens/DetailedPhoto";
import { TouchableOpacity } from "react-native-gesture-handler";

export const PhotosMainScreen = ({ navigation }) => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      const API_KEY = "kxl-SEnNCzuVyumKOg-lT9oAKv6CHhezNe3VdMDKmR0";
      fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`)
        .then((response) => response.json())
        .then((photos) => dispatch(setPhotos(photos)))
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("DetailedPhoto", {
              itemUrl: item.urls.full,
            })}
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
    flexDirection: "column",
    backgroundColor: "tomato",
  },
});
