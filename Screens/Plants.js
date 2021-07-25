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
  FlatList,
  Image,
} from "react-native";
import { BlurView } from "expo-blur";
import { PanGestureHandler } from "react-native-gesture-handler";
import SwiperButton from "../SwiperButton";
import { useNavigation } from "@react-navigation/native";
import type from "../type";
import data from "../data";
import { Feather } from "@expo/vector-icons";

const { width, height, scale } = Dimensions.get("screen");
const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const PlantScreen = () => {
  const navigation = useNavigation();

  const [typeOfThePlant, setTypeOfThePlant] = React.useState(type[0]);

  console.log(width);
  function drawer() {
    return (
      <View style={{ flex: 0.3, zIndex: 1 }}>
        <BlurView
          intensity={80}
          style={{
            flex: 1,
            alignItems: "center",
            height,
            width: "100%",
            flexDirection: "column",
            zIndex: -10,
            paddingVertical: 70,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 15,
              left: 70,
              zIndex: 100,
              width: width * 0.5,
              letterSpacing: 1,
            }}
          >
            Green {"\n"}
            <Text
              style={{
                color: "white",
                fontSize: 50,
                fontWeight: "bold",
                lineHeight: 65,
              }}
            >
              Plants
            </Text>
          </Text>
          <FlatList
            data={type}
            keyExtractor={(i, _) => i}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "flex-start",
              position: "relative",
              zIndex: -10,
              width: "100%",
            }}
            bounces={false}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{
                    width: 117,
                    height: 80,
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: 30,
                  }}
                  onPress={() => setTypeOfThePlant(item)}
                >
                  <View
                    style={{
                      height: 30,
                      borderLeftWidth: 7,
                      borderColor:
                        item === typeOfThePlant ? "#90EE90" : "transparent",
                      borderRadius: 10,
                      right: 2,
                    }}
                  />

                  <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                      left: 0,
                      flexDirection: "row",
                    }}
                  >
                    <Text
                      style={{
                        color:
                          item === typeOfThePlant
                            ? "white"
                            : "rgba(255,255,255,0.5)",
                        fontSize: 15,

                        transform: [
                          {
                            rotate: "-90deg",
                          },
                        ],
                      }}
                    >
                      {item}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          <TouchableOpacity
            style={{
              width: 60,
              height: 60,
              borderRadius: 200,
              overflow: "hidden",
            }}
            onPress={() => navigation.navigate("Home")}
          >
            <BlurView
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center",
              }}
              intensity={90}
            >
              <Feather name="home" size={27} color="white" />
            </BlurView>
          </TouchableOpacity>
        </BlurView>
      </View>
    );
  }

  function plants() {
    return (
      <View style={{ flex: 0.7, height }}>
        <View
          style={{
            flexDirection: "row-reverse",
            marginTop: 60,
            paddingHorizontal: 20,
            height: "8%",
          }}
        >
          <TouchableOpacity>
            <Feather name="shopping-bag" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather
              name="search"
              size={24}
              color="white"
              style={{ marginRight: 30 }}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={data.filter((item) => {
            return item.type === typeOfThePlant;
          })}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            paddingBottom: 50,
            paddingTop: 10,
          }}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: width * 0.45,
                  height: width * 0.6,
                  borderRadius: 20,
                  marginTop: 80,
                  zIndex: -100,
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    overflow: "hidden",
                    zIndex: -10,
                    bottom: 40,
                  }}
                >
                  <BlurView intensity={80} style={{ flex: 1 }}></BlurView>
                </View>

                <View
                  style={{
                    width: "100%",
                    height: "80%",
                    position: "absolute",
                    justifyContent: "center",
                    alignItems: "center",
                    bottom: 140,
                    zIndex: -1,
                  }}
                >
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "80%",
                      resizeMode: "contain",
                      top: 10,
                      transform: [
                        {
                          scale: 1,
                        },
                      ],
                    }}
                  />

                  <View
                    style={{
                      width: 30,
                      height: 10,

                      backgroundColor: "transparent",
                      shadowOpacity: 1,
                      shadowRadius: 2,
                      shadowColor: "rgba(255,255,255,1)",
                      top: 25,
                      transform: [
                        {
                          scaleX: 2,
                        },
                      ],
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 40,
                        overflow: "hidden",
                      }}
                    >
                      <BlurView intensity={5} style={{ flex: 1 }} />
                    </View>
                  </View>

                  <Text
                    style={{
                      color: "white",
                      fontWeight: "bold",
                      fontSize: 17,
                      top: 40,
                    }}
                  >
                    {item.name}
                  </Text>
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Buy", {
                      item: item,
                    })
                  }
                  style={{
                    width: width * 0.16,
                    height: width * 0.16,
                    borderRadius: 20,
                    backgroundColor: "white",
                    top: width * 0.4,
                    zIndex: 100,
                    position: "absolute",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather name="shopping-bag" size={30} color="black" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
        flexDirection: "row",
      }}
    >
      {drawer()}
      {plants()}
    </View>
  );
};

export default PlantScreen;
