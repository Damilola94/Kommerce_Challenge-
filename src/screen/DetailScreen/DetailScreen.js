import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, AntDesign, Feather } from "@expo/vector-icons";

import { resFont, resHeight, resWidth } from "../../utils/utils";
import Colors from "../../utils/Colors";
import { Product_Data } from "../../../Dummy_Data";
import CustomButton from "../../components/CommonComponents/CustomButton/CustomButton";
Product_Data;

const DetailScreen = ({ navigation, route }) => {
  const { value } = route?.params;

  const { height } = Dimensions.get("window");

  const ProductDetail = ({ value }) => {
    return (
      <View>
        <View style={styles.cardContainer}>
          <Image
            source={value.imgUrl}
            style={styles.image}
            resizeMode="cover"
          />
          <TouchableOpacity style={styles.icon}>
            <AntDesign name="hearto" size={28} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>{value.productName}</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign name="star" size={15} color="#FFA928" />
            <Text style={styles.subTitle}>{value.review}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{value.description}</Text>
        </View>
        <View>
          <Text style={styles.choosesize}>Choose size</Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.size}>
              <Text style={styles.diffSize}>S</Text>
            </View>
            <View style={styles.size}>
              <Text style={styles.diffSize}>M</Text>
            </View>
            <View style={styles.size}>
              <Text style={styles.diffSize}>L</Text>
            </View>
          </View>
        </View>
        <View style={{ padding: -32, marginTop: 30 }}>
          <View
            style={{
              borderColor: "#ccc",
              borderTopWidth: 1,
              padding: -32,
              marginBottom: 20,
            }}
          />
          <View style={styles.btnView}>
            <View style={{ width: "40%" }}>
              <Text>Price</Text>
              <Text style={styles.title}>{value.price}</Text>
            </View>
            <CustomButton
              detail
              onPress={() => navigation.navigate("My Cart")}
              text="Add to Cart"
              iconCart={<Feather name="shopping-bag" size={24} color="white" />}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={[styles.container, { height: height }]}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.welcome}>Details</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            name="notifications-outline"
            size={resHeight(3)}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductDetail value={value} />
        <View style={{ marginBottom: resHeight(10) }} />
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
    fontSize: resFont(24),
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
  input: {
    marginLeft: 10,
  },
  card: {
    marginVertical: 8,
    marginRight: 15,
  },
  firstCard: {
    // marginLeft: 8,
  },
  cardContainer: {
    width: resWidth(91),
    height: resHeight(50),
    borderRadius: 15,
    marginTop: resHeight(3),
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  icon: {
    position: "absolute",
    right: 17,
    top: 10,
    backgroundColor: Colors.grayFill,
    borderRadius: resHeight(1),
    width: resHeight(6),
    height: resHeight(6),
    shadowColor: "#000",
    justifyContent:"center",
    alignItems:"center",
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  title: {
    fontSize: resFont(28),
    color: "#333333",
    fontWeight: "400",
    marginVertical: resHeight(0.5),
  },
  subTitle: {
    fontSize: resFont(15),
    color: "#333333",
    marginLeft: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: resFont(15),
    color: "rgba(0, 0, 0, 0.60)",
    lineHeight: resFont(19),
    marginTop: resHeight(2),
  },
  choosesize: {
    fontSize: resFont(16),
    color: "#333333",
    fontWeight: "400",
    marginVertical: resHeight(2),
  },
  size: {
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: Colors.grayFill,
    borderRadius: resHeight(1),
    width: resHeight(6),
    height: resHeight(6),
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  diffSize: {
    fontSize: resFont(20),
    color: "#333333",
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
});

export default DetailScreen;
