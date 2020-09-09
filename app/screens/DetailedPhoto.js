import React from "react";
import { Text, Image, StyleSheet, View } from "react-native";
export const DetailedPhoto = ({ route }) => {
  const { itemUrl } = route.params;
  return (
    <View style={styles.container}>
      <Image source={{ uri: itemUrl }} style={styles.fullImageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },

  fullImageStyle: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
