import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../utils/Colors";
import { resFont, resHeight } from "../../../utils/utils";

const CustomButton = ({
  onPress,
  text,
  type2,
  type = "PRIMARY",
  bgColor,
  fgColor,
  text2,
  invert,
  icon,
  iconGoogle,
  detail,
  iconFacebook,
  iconCart
}) => {
  const styles = StyleSheet.create({
    container: {
      width: detail ? "" : "100%",
      padding: 15,
      alignItems: "center",
      alignContent: "center",
      borderRadius: 5,
      marginVertical: resHeight(1),
    },
    contianer_PRIMARY: {
      backgroundColor: !iconFacebook ? Colors.primary : "#1877F2",
    },
    contianer_SECONDARY: {
      borderColor: "#ccc",
      borderWidth: 2,
    },
    contianer_TERTIARY: {},
    text: {
      fontWeight: "500",
      color: "white",
      fontSize: resFont(15),
    },
    text_TERTIARY: {
      color: "gray",
      maxWidth: "90%",
      textAlign: "center",
      lineHeight: resFont(20),
    },
    text_SECONDARY: {
      color: Colors.primary,
    },
    text_ELEMENTARY: {
      color: Colors.primary,
      maxWidth: "90%",
      textAlign: "center",
      lineHeight: resFont(20),
    },
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        styles[`contianer_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <View style={{ flexDirection: "row" }}>
        {iconGoogle && iconGoogle}
        {iconFacebook && (
          <View style={{ marginRight: 20 }}>{iconFacebook}</View>
        )}
        {iconCart && (
          <View style={{ marginRight: 20 }}>{iconCart}</View>
        )}
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? { color: fgColor } : {},
          ]}
        >
          {text}
        </Text>

        {icon && <View style={{ marginLeft: 10 }}>{icon}</View>}
        {text2 && (
          <Text
            style={[styles.text, styles[`text_${type2}`]]}
          >{` ${text2}`}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
