import React, { useState } from "react";
import { Text, Image, StyleSheet, View, ActivityIndicator } from "react-native";

export const DetailedPhoto = ({ route }) => {
  const { itemUrl } = route.params;
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={styles.container}>
      {loaded ? null : (
        <ActivityIndicator
          animating={true}
          size="large"
          color="tomato"
          style={{ marginTop: 100 }}
        />
      )}
      <Image
        source={{ uri: itemUrl }}
        style={loaded ? styles.fullImageStyle : { display: "none" }}
        onLoad={() => setLoaded(true)}
      />
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
    width: "95%",
    height: "100%",
  },
});
