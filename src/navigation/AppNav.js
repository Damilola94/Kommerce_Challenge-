import React, { useContext } from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet, StatusBar } from "react-native";

import { AuthContext } from "../context/AuthContext";
import OnboardingStack from "./stacks/OnboardingStack";

import Colors from "../utils/Colors";
import TabNavigation from "./TabNavigation";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#FFF",
  },
};

const AppNav = () => {
  const { userToken } = useContext(AuthContext);

  return (
    <NavigationContainer theme={navTheme}>
      {userToken !== null ? (
        <View style={styles.container}>
          <StatusBar
            style="auto"
            backgroundColor={Colors.primary}
            barStyle="dark-content"
          />
          <TabNavigation />
        </View>
      ) : (
        <View style={styles.container}>
          <OnboardingStack />
          <StatusBar
            style="auto"
            backgroundColor={Colors.primary}
            barStyle="dark-content"
          />
        </View>
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppNav;
