import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  Animated,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";
import { PanGestureHandler } from "react-native-gesture-handler";
import SwiperButton from "../SwiperButton";

const { width, height } = Dimensions.get("screen");
const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const Home = ({ navigation }) => {
  const [touchX, setTouchX] = React.useState(new Animated.Value(0));
  const [translationX, setTranslationX] = React.useState(0);
  const [played, setPlayed] = React.useState(true);
  const largeCircle = new Animated.Value(0);

  const onPanGestureEvent = Animated.event([{ nativeEvent: { x: touchX } }], {
    useNativeDriver: true,
    listener: (e) => {
      // setTouchX(touchX);
      setTranslationX(e.nativeEvent.x);
      setTouchX(new Animated.Value(e.nativeEvent.x));
    },
  });

  const opacityAnimation = touchX.interpolate({
    inputRange: [0, 125],
    outputRange: [1, 0],
  });

  React.useEffect(() => {
    setTouchX(new Animated.Value(0));
  }, []);

  React.useEffect(() => {
    if (translationX >= 209) {
      // setTouchX(new Animated.Value(196));
      navigation.navigate("Plant");
      setTimeout(() => {
        setTouchX(new Animated.Value(0));
      }, 500);
    }
  }, [translationX]);

  return (
    <AnimatedImageBackground
      style={styles.container}
      source={require("../assets/plantBackground.jpg")}
    >
      <Animated.Text
        style={{
          color: "white",
          fontSize: 40,
          fontWeight: "bold",
          paddingHorizontal: 30,
          textAlign: "center",
          marginBottom: height * 0.25,
        }}
      >
        Home is Where {"\n"} My Plants Are
      </Animated.Text>

      <Animated.View
        style={{
          width: width * 0.9,
          height: height * 0.13,
          borderRadius: 50,
          overflow: "hidden",
          left: width * 0.2,
          position: "absolute",
          bottom: 80,
        }}
      >
        <AnimatedBlurView
          intensity={90}
          style={{
            width: width * 0.9,
            height: height * 0.13,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <PanGestureHandler onGestureEvent={onPanGestureEvent}>
            <Animated.View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                width: "68%",
                alignContent: "flex-start",
              }}
            >
              <Animated.View
                style={{
                  transform: [
                    {
                      translateX:
                        touchX._value >= 0 && touchX._value <= 209
                          ? touchX
                          : touchX._value > 209
                          ? 208
                          : 0,
                    },
                  ],
                }}
              >
                <SwiperButton played={played} />
              </Animated.View>

              <Animated.Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                  opacity: opacityAnimation,
                  zIndex: 5,
                  right: "30%",
                }}
              >
                Swipe to see
              </Animated.Text>
            </Animated.View>
          </PanGestureHandler>
        </AnimatedBlurView>
      </Animated.View>
    </AnimatedImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
