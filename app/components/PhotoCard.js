import React from "react";
import { StyleSheet, Text, Image } from "react-native";

export const PhotoCard = ({ urls, alt_description, user }) => {
  return (
    <>
      <Image source={{ uri: urls.small }} style={styles.image} />
      <Text style={styles.textDescription}>
        {alt_description} by {user.name}
      </Text>
    </>
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
