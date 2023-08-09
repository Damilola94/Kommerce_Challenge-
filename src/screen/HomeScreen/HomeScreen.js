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
  TextInput,
  FlatList,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import { resFont, resHeight, resWidth } from "../../utils/utils";
import CustomSwitch from "../../components/CommonComponents/CustomSelect/CustomSelect";
import Colors from "../../utils/Colors";
import { Product_Data } from "../../../Dummy_Data";
Product_Data;

const HomeScreen = ({ navigation }) => {
  const { height } = Dimensions.get("window");
  const [toggleTab, setToggleTab] = useState(1);
  const [search, setSearch] = useState("");
  const [productList, setProductList] = useState(Product_Data);

  const onSelectSwitch = (value) => {
    setToggleTab(value);
  };

  const ProductsCard = ({ value, isFirstItem }) => {
    const cardStyle = [styles.card];

    if (isFirstItem) {
      cardStyle.push(styles.firstCard);
    }
    return (
      <View style={cardStyle}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Detail", { value })}
            style={styles.cardContainer}
          >
            <Image
              source={value.imgUrl}
              style={styles.image}
              resizeMode="cover"
            />
            <View style={styles.icon}>
              <AntDesign name="hearto" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.title}>{value.productName}</Text>
            <Text style={styles.subTitle}>{value.price}</Text>
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
        <Text style={styles.welcome}>Discover</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            name="notifications-outline"
            size={resHeight(3)}
            color="black"
          />
        </TouchableOpacity>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              backgroundColor: Colors.grayFill,
              alignItems: "center",
              width: "82%",
              borderRadius: 10,
              padding: 15,
              paddingHorizontal: 20,
            }}
          >
            <AntDesign name="search1" size={30} color="black" />
            <TextInput
              style={styles.input}
              onChangeText={setSearch}
              value={search}
              placeholder="Search anything"
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.primary,
              padding: 15,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Ionicons name="md-filter-sharp" size={30} color="white" />
          </View>
        </View>
      </View>
      <View style={{ marginTop: resHeight(2) }}>
        <CustomSwitch
          selectionMode={1}
          option1="All"
          option2="Men"
          option3="Women"
          option4="Kids"
          onSelectSwitch={onSelectSwitch}
        />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={productList}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item, index }) => (
          <ProductsCard
            value={item}
            isFirstItem={index % 2 === 0}
          />
        )}
      />
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
  input: {
    marginLeft: 10,
  },
  card: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 8,
    marginRight: 15,
  },
  firstCard: {
    // marginLeft: 8,
  },
  cardContainer: {
    width: resHeight(20),
    height: resHeight(21),
    borderRadius: 15,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4.84,
    elevation: 5,
  },
  title: {
    fontSize: resFont(12),
    color: "#333333",
    fontWeight: "400",
    marginVertical: resHeight(0.5),
  },
  subTitle: {
    fontSize: resFont(10),
    color: "#333333",
  },
});

export default HomeScreen;
