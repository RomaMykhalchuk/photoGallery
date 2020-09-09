import React from "react";
import { Image ,StyleSheet } from "react-native";

export const HeaderLogo = () => {
  return <Image source={require("../../assets/logo.png")} style={styles.logo}/>;
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'contain',
    height: "100%",
  }
})