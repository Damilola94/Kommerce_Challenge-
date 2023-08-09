import React, {  } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

import BgImages from "../../../assets/images/bg.png";
import objectImage from "../../../assets/images/object.png";
import CustomButton from "../../components/CommonComponents/CustomButton";
import { resFont, resHeight, resWidth } from "../../utils/utils";
import Colors from "../../utils/Colors";

const Onboarding = ({ navigation  }) => {
  const { height } = Dimensions.get("window");

  const getStarted = () => {
    navigation.navigate("Create an account");
  };

  return (
    <View style={{ marginTop: 40 }}>
      <Text style={styles.welcome}>Define yourself in your unique way.</Text>

      <ImageBackground
        source={BgImages}
        resizeMode="cover"
        style={styles.image}
      >
        <Image
          source={objectImage}
          style={[styles.objectImage, { height: height * 0.79 }]}
          resizeMode="contain"
        />
      </ImageBackground>

      <View style={{borderColor:"#ccc", borderTopWidth: 1}}/>
      <View style={styles.root}>
        <CustomButton
          onPress={getStarted}
          text="Get Started"
          icon={<AntDesign name="arrowright" size={24} color="white" />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  root: {
    alignItems: "center",
    padding: 16,

  },
  objectImage: {
    marginLeft: resWidth(10),
    width: "100%",
    height: "100%",
    marginTop: "-75%",
    padding: -40,
  },
  welcome: {
    fontSize: resFont(60),
    color: Colors.primary,
    fontWeight: "800",
    lineHeight: resFont(45),
    maxWidth: "100%",
    marginBottom: resHeight(3),
    marginVertical: resHeight(1),
    padding: 16,
    paddingTop: 25,
  },
});

export default Onboarding;
