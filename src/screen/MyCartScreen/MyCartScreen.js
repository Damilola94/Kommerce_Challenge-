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
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons, Feather, AntDesign } from "@expo/vector-icons";

import { resFont, resHeight, resWidth } from "../../utils/utils";
import Colors from "../../utils/Colors";
import { Cart_Data } from "../../../Dummy_Data";
import CustomInput from "../../components/CommonComponents/CustomInput/CustomInput";
import CustomButton from "../../components/CommonComponents/CustomButton/CustomButton";

const DetailScreen = ({ navigation }) => {
  const [productList, setProductList] = useState(Cart_Data);
  const [voucher, setVoucher] = useState("");

  const { height } = Dimensions.get("window");

  const ProductsCard = ({ value }) => {
    return (
      <View style={styles.card}>
        <View onPress={() => {}} style={styles.cardContainer}>
          <Image
            source={value.imgUrl}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View
          style={{
            width: "100%",
            justifyContent: "space-between",
            marginRight: 10,
          }}
        >
          <View style={{ width: "68%", marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{value.productName}</Text>
              <Feather name="trash-2" size={24} color="red" />
            </View>

            <Text style={styles.subTitle}>{value.size}</Text>
          </View>
          <View style={{ width: "68%", marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>{value.price}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={styles.size}>
                  <Text style={styles.diffSize}>-</Text>
                </View>
                <Text style={[styles.diffSize, { marginHorizontal: 10 }]}>
                  2
                </Text>
                <View style={styles.size}>
                  <Text style={styles.diffSize}>+</Text>
                </View>
              </View>
            </View>
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.welcome}>My Cart</Text>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="notifications-outline"
              size={resHeight(3)}
              color="black"
            />
          </TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={productList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ProductsCard value={item} />}
        />
        <View style={styles.footer}>
          <CustomInput
            placeholder="Add a voucher"
            value={voucher}
            setValue={setVoucher}
            returnKeyType="done"
            returnKeyLabel="Done"
          />
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <View style={styles.footerCont}>
              <Text style={styles.subTfooterContTitleitle}>Sub-total</Text>
              <Text style={styles.footerContSubTitle}>$5,870</Text>
            </View>
            <View style={styles.footerCont}>
              <Text style={styles.footerContTitle}>VAT (%)</Text>
              <Text style={styles.footerContSubTitle}>$0.00</Text>
            </View>
            <View style={styles.footerCont}>
              <Text style={styles.footerContTitle}>Shipping fee</Text>
              <Text style={styles.footerContSubTitle}>$80</Text>
            </View>
          </View>
          <View
            style={{ borderColor: "#ccc", borderTopWidth: 1, marginBottom: 10 }}
          />
          <View style={[styles.footerCont, { marginBottom: 20 }]}>
            <Text style={[styles.footerContSubTitle]}>Total</Text>
            <Text style={styles.footerContSubTitle}>$5,950</Text>
          </View>
          <View
            style={{ borderColor: "#ccc", borderTopWidth: 1, marginBottom: 20 }}
          />
          <View style={styles.root}>
            <CustomButton
              text="Checkout"
              icon={<AntDesign name="arrowright" size={24} color="white" />}
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
    fontSize: resFont(24),
    color: "#111928",
    fontWeight: "600",
    lineHeight: resFont(30),
    marginBottom: 16,
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
    // flex: 1,
    marginVertical: 8,
    flexDirection: "row",
    width: "100%",
    backgroundColor: Colors.grayFill,
    padding: 15,
    justifyContent: "space-between",
    borderRadius: 10,
  },
  cardContainer: {
    width: resWidth(22),
    height: resHeight(10),
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  title: {
    fontSize: resFont(14),
    color: "#333333",
    fontWeight: "400",
  },
  subTitle: {
    fontSize: resFont(13),
    color: "#333333",
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
    backgroundColor: Colors,
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: resHeight(1),
    width: resHeight(4),
    height: resHeight(4),
    justifyContent: "center",
    alignItems: "center",
  },
  diffSize: {
    fontSize: resFont(15),
    color: "#333333",
  },
  btnView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footer: {
    flex: 100,
    marginBottom: 100,
  },
  footerCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  footerContTitle: {
    fontSize: resFont(13),
    color: "rgba(0, 0, 0, 0.60)",
  },
  footerContSubTitle: {
    fontSize: resFont(13),
    color: Colors.primary,
    fontWeight: "600",
  },
});

export default DetailScreen;
