import React from "react";
import { Text, Image } from "react-native";

export const DetailedPhoto = ({ route }) => {
  const { itemUrl } = route.params;
  return <Image source={{ uri: itemUrl }} style={{width:500, height:500}} />;
};
