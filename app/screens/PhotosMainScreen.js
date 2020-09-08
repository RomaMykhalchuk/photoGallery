import React, {useEffect} from "react";
import { Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { setPhotos } from "../store/reducers/photosReducer";

export const PhotosMainScreen = () => {

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



  return <Text>{photos.length}</Text>;
};
