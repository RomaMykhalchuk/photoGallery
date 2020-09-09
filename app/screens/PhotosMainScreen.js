import React, { useEffect } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
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
        .catch((err) => console.log(err));
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        numColumns={3}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ width: "33%", flexDirection: "column", margin: 3 }}>
            <TouchableOpacity
              style={{ flex: 1 }}
              key={item.id}
              onPress={() =>
                navigation.navigate("Full Image", {
                  itemUrl: item.urls.full,
                })
              }
            >
              <PhotoCard {...item} />
            </TouchableOpacity>
          </View>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 5,
  },
});
