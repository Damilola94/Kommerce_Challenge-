import React, { useContext, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Image,
} from "react-native";
import google from "../../../assets/images/google.png";
import { FontAwesome5 } from "@expo/vector-icons";
import CustomButton from "../../components/CommonComponents/CustomButton";
import CustomInput from "../../components/CommonComponents/CustomInput";
import { resFont, resHeight } from "../../utils/utils";
import { AuthContext } from "../../context/AuthContext";
const CreateAnAccountScreen = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const [fullName, setFName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { getStarted } = useContext(AuthContext);

  const onSignInPressed = () => {
    getStarted()
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ height: height }}
      >
        <Text style={styles.welcome}>Create an account</Text>
        <Text style={styles.subText}>Let’s create your account</Text>
        <View style={styles.root}>
          <CustomInput
            label="Full name"
            placeholder="Enter your full name"
            value={fullName}
            setValue={setFName}
            returnKeyType="done"
            returnKeyLabel="Done"
          />
          <CustomInput
            label="Email"
            placeholder="Enter your email address"
            value={email}
            setValue={setEmail}
            returnKeyType="done"
            returnKeyLabel="Done"
          />
          <CustomInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            secureTextEntry
            setValue={setPassword}
            returnKeyType="done"
            returnKeyLabel="Done"
          />
          <CustomButton onPress={onSignInPressed} text="Sign Up" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View style={styles.underline} />
            <Text style={{ marginHorizontal: 10 }}>Or</Text>
            <View style={styles.underline} />
          </View>
          <CustomButton
            onPress={onSignInPressed}
            text="Sign Up with Google"
            type="SECONDARY"
            iconGoogle={
              <Image
                source={google}
                style={{
                  width: "6%",
                  height: "10%",
                  aspectRatio: "1",
                  marginRight: 20,
                }}
                resizeMode="contain"
              />
            }
          />
          <CustomButton
            onPress={onSignInPressed}
            text="Sign Up with Facebook"
            iconFacebook={
              <FontAwesome5 name="facebook" size={24} color="white" />
            }
          />
          <View style={{ marginTop: resHeight(4) }}>
            <CustomButton
              onPress={onSignInPressed}
              text="Already a member? "
              text2="Log In"
              type="TERTIARY"
              type2="ELEMENTARY"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: resHeight(7),
  },
  welcome: {
    fontSize: resFont(30),
    color: "#111928",
    fontWeight: "600",
    lineHeight: resFont(30),
  },
  subText: {
    fontSize: resFont(15),
    color: "#111928",
    marginBottom: resHeight(3),
  },
  underline: {
    borderColor: "rgba(0, 0, 0, 0.20)",
    borderWidth: 1,
    width: "100%",
  },
});

export default CreateAnAccountScreen;
