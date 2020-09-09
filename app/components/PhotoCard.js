import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";

// import FastImage from "react-native-fast-image";

export const PhotoCard = ({ urls, alt_description, user }) => {
  return (
    <View style={{ flex: 1, margin: 1 }}>
      <Image source={{ uri: urls.raw }} style={styles.image} />
      <View>
        <Text style={styles.textDescription}> 
          {alt_description} by {user.name}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 150,
  },
  textDescription: {
    marginTop: 1,
    fontWeight: 'bold',
    fontStyle:'italic',
    marginLeft: 10
  },  
});
