import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

export const PhotoCard = ({ id, urls }) => {
  return (
    <View style={{ flex: 1, margin: 1 }}>
      <Text>{id}</Text>
      <Image source={urls.raw} style={{ width: 100, height: 100 }} />
     </View>
  );
};
