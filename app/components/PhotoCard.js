import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export const PhotoCard = ({ urls, alt_description, user }) => {
  return (
    // <View style={{ flex: 1, margin: 1 }}>
    <>
      <Image source={{ uri: urls.small }} style={styles.image} />
      <Text style={styles.textDescription}>
        {alt_description} by {user.name}
      </Text>
      </>
    // </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  textDescription: {
    marginTop: 1,
    fontWeight: "bold",
    fontStyle: "italic",
    marginLeft: 10,
  },
});
