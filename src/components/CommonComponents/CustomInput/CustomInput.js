import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";

const CustomInput = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
  label,
  type,
  maxLength,
  handleBlur,
}) => {
  const [eyeWithLine, setEyeWithLine] = useState(secureTextEntry);

  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput
          value={value}
          onChangeText={setValue}
          keyboardType={type}
          placeholder={placeholder}
          placeholderTextColor="#6B7280"
          style={styles.input}
          returnKeyType="done"
          returnKeyLabel="Done"
          maxLength={maxLength}
          onBlur={handleBlur}
          secureTextEntry={eyeWithLine}
        />
        {secureTextEntry && (
          <View style={styles.eyeChecker}>
            {eyeWithLine && (
              <TouchableOpacity onPress={() => setEyeWithLine(false)}>
                <MaterialCommunityIcons name="eye" size={20} color="#808080" />
              </TouchableOpacity>
            )}
            {!eyeWithLine && (
              <TouchableOpacity onPress={() => setEyeWithLine(true)}>
                <Entypo name="eye-with-line" size={20} color="#808080" />
              </TouchableOpacity>
            )}
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: "100%",
    marginVertical: 10,
  },
  container: {
    flexDirection: "row",
    justifyContent:"space-between",
    backgroundColor: "#F9FAFB",
    borderColor: "#D1D5DB",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 5,
    color: "#111928",
  },
  input: {},
  label: {
    fontSize: 16,
    color: "#111928",
  },
});

export default CustomInput;
