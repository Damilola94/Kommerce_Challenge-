import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ComingSoon from "../../screen/ComingSoon";


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
