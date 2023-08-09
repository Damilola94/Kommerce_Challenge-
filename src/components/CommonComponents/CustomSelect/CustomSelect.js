import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { resWidth } from "../../../utils/utils";
import Colors from "../../../utils/Colors";

const CustomSwitch = ({
  selectionMode,
  option1,
  option2,
  option3,
  option4,
  onSelectSwitch,
}) => {
  const [getSelectionMode, setSelectionMode] = useState(selectionMode);

  const updateSwitchData = (value) => {
    setSelectionMode(value);
    onSelectSwitch(value);
  };

  return (
    <View style={styles.selectTab}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          updateSwitchData(1);
        }}
        style={{
          flex: 1,
          backgroundColor: getSelectionMode == 1 ? Colors.primary : Colors.grayFill,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          shadowColor: getSelectionMode == 1 ? "#000" : "",
          shadowOpacity: getSelectionMode == 1 ? 0.25 : "",
          shadowRadius: getSelectionMode == 1 ? 3.84 : "",
          elevation: getSelectionMode == 1 ? 5 : 0,
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 1 ? "white" : Colors.primary,
            fontSize: 14,
          }}
        >
          {option1}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          updateSwitchData(2);
        }}
        style={{
          flex: 1,
          marginHorizontal: 8,
          backgroundColor: getSelectionMode == 2 ? Colors.primary : Colors.grayFill,
          flexWrap: "wrap",
          padding: 5,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          shadowColor: getSelectionMode == 2 ? "#000" : "",
          shadowOpacity: getSelectionMode == 2 ? 0.25 : "",
          shadowRadius: getSelectionMode == 2 ? 4.84 : "",
          elevation: getSelectionMode == 2 ? 5 : 0,
        }}
      >
        <Text
          style={{
            color: getSelectionMode == 2 ? "white" : Colors.primary,
            fontSize: 14,
          }}
        >
          {option2}
        </Text>
      </TouchableOpacity>
      {option3 && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            updateSwitchData(3);
          }}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 3 ? Colors.primary : Colors.grayFill,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: getSelectionMode == 3 ? "#000" : "",
            shadowOpacity: getSelectionMode == 3 ? 0.25 : "",
            shadowRadius: getSelectionMode == 3 ? 4.84 : "",
            elevation: getSelectionMode == 3 ? 5 : 0,
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 3 ? "white" : Colors.primary,
              fontSize: 14,
            }}
          >
            {option3}
          </Text>
        </TouchableOpacity>
      )}
      {option4 && (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            updateSwitchData(4);
          }}
          style={{
            flex: 1,
            backgroundColor: getSelectionMode == 4 ?Colors.primary : Colors.grayFill,
            borderRadius: 10,
            marginLeft: 10,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: getSelectionMode == 4 ? "#000" : "",
            shadowOpacity: getSelectionMode == 4 ? 0.25 : "",
            shadowRadius: getSelectionMode == 4 ? 4.84 : "",
            elevation: getSelectionMode == 4 ? 5 : 0,
          }}
        >
          <Text
            style={{
              color: getSelectionMode == 4 ? "white" : Colors.primary,
              fontSize: 14,
            }}
          >
            {option4}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  selectTab: {
    width: Platform.OS === "android" ? resWidth(86) : resWidth(90),
    height: 32,
    marginBottom: 10,
    // backgroundColor: "#e4e4e4",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  requests: {
    width: 130,
    height: 30,
    marginTop: -5,
    // marginLeft: -10,
    borderRadius: 10,
    alignContent: "center",
    backgroundColor: "#FFFFFF",
    shadowColor: "#888",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 2,
    elevation: 5,
  },
});

export default CustomSwitch;
