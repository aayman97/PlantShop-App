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
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const LargeCircle = ({ played }) => {
  const [largeCircle, setLargeCircle] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
    if (played) {
      if (largeCircle._value === 0) {
        Animated.timing(largeCircle, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }).start(() => setLargeCircle(new Animated.Value(1)));
      } else {
        Animated.timing(largeCircle, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setLargeCircle(new Animated.Value(0)));
      }
    }
  }, [largeCircle]);
  return (
    <Animated.View
      style={{
        width: width * 0.25,
        height: width * 0.25,
        borderRadius: width * 0.25,
        backgroundColor: "rgba(255,255,255,0.1)",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        opacity: largeCircle,
      }}
    />
  );
};

const SwiperButton = ({ played }) => {
  const [middleCircle, setMiddleCircle] = React.useState(new Animated.Value(0));
  React.useEffect(() => {
    if (played) {
      if (middleCircle._value === 0) {
        Animated.timing(middleCircle, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start(() => setMiddleCircle(new Animated.Value(1)));
      } else {
        Animated.timing(middleCircle, {
          toValue: 0,
          duration: 700,
          useNativeDriver: true,
        }).start(() => setMiddleCircle(new Animated.Value(0)));
      }
    }
  }, [middleCircle]);
  return (
    <Animated.View
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: width * 0.25,
        height: width * 0.25,

        borderRadius: width * 0.25,
        zIndex: -1,
        right: 50,
      }}
    >
      <LargeCircle played={played} />
      <Animated.View
        style={{
          width: width * 0.2,
          height: width * 0.2,
          borderRadius: width * 0.2,
          zIndex: 5,
          backgroundColor: "rgba(255,255,255,0.5)",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          alignSelf: "center",
          opacity: middleCircle,
        }}
      />

      <Animated.View
        style={{
          width: width * 0.15,
          height: width * 0.15,
          borderRadius: width * 0.2,
          zIndex: 10,
          backgroundColor: "rgba(255,255,255,1)",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          alignSelf: "center",
        }}
      >
        <FontAwesome5 name="angle-double-right" size={24} color="black" />
      </Animated.View>
    </Animated.View>
  );
};

export default SwiperButton;
