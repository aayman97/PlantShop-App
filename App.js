import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Animated,
} from "react-native";
import { BlurView } from "expo-blur";
import { PanGestureHandler } from "react-native-gesture-handler";
import SwiperButton from "./SwiperButton";
import Home from "./Screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PlantScreen from "./Screens/Plants";
import Buy from "./Screens/Buy";
import { enableScreens } from "react-native-screens";

const Stack = createStackNavigator();
export default function App() {
  enableScreens();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={Home} name="Home" />
        <Stack.Screen
          component={PlantScreen}
          name="Plant"
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen component={Buy} name="Buy" />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
