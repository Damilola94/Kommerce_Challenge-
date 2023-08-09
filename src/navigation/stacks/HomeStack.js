import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../../screen/HomeScreen";
import DetailScreen from "../../screen/DetailScreen";
import MyCartScreen from "../../screen/MyCartScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name="My Cart"
        component={MyCartScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
