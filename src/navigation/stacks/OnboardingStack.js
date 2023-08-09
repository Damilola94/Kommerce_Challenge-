import { createNativeStackNavigator } from "@react-navigation/native-stack";

import OnboardingScreen from "../../screen/Onboarding";
import CreateAnAccountScreen from "../../screen/CreateAnAccountScreen";

const Stack = createNativeStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Onboarding"
        component={OnboardingScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Create an account"
        component={CreateAnAccountScreen}
      />
    </Stack.Navigator>
  );
};

export default OnboardingStack;
