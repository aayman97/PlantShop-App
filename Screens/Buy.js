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
import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const AnimatedImageBackground =
  Animated.createAnimatedComponent(ImageBackground);

function header(navigation) {
  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 60,
        paddingHorizontal: 20,
        height: "8%",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-sharp" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Feather name="shopping-bag" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
function details() {
  return (
    <View
      style={{
        width: width * 0.5,
        marginLeft: 5,
        justifyContent: "space-around",
      }}
    >
      <View>
        <Text style={{ color: "rgba(255,255,255,0.7)" }}>Watering</Text>
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: 60,
          }}
        >
          1{" "}
          <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
            /week
          </Text>
        </Text>
      </View>

      <View>
        <Text style={{ color: "rgba(255,255,255,0.7)" }}>Height</Text>
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: 60,
          }}
        >
          12{" "}
          <Text style={{ color: "rgba(255,255,255,0.7)", fontSize: 15 }}>
            cm
          </Text>
        </Text>
      </View>

      <View>
        <Text style={{ color: "rgba(255,255,255,0.7)" }}>Temperature</Text>
        <Text
          style={{
            color: "rgba(255,255,255,1)",
            fontWeight: "bold",
            fontSize: 30,
            lineHeight: 60,
          }}
        >
          26{" "}
          <Text
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: 15,
              textAlignVertical: "top",
            }}
          >
            <MaterialCommunityIcons
              name="temperature-celsius"
              size={15}
              color="rgba(255,255,255,0.7)"
            />
          </Text>
        </Text>
      </View>
    </View>
  );
}

function imageOfThePlant(item) {
  return (
    <View
      style={{
        width: width * 0.6,
        height: height * 0.4,
        borderRadius: 20,

        zIndex: -100,
        right: 20,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          borderRadius: 20,
          overflow: "hidden",
          zIndex: -10,
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
          bottom: 80,
          zIndex: -1,
        }}
      >
        <Image
          source={item.image}
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "contain",
            top: 10,
            transform: [
              {
                scaleY: 1.2,
              },
            ],
          }}
        />

        <View
          style={{
            width: 80,
            height: 10,

            backgroundColor: "transparent",
            shadowOpacity: 1,
            shadowRadius: 2,
            shadowColor: "rgba(255,255,255,1)",
            top: 50,
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
            <BlurView intensity={10} style={{ flex: 1 }} />
          </View>
        </View>
      </View>
    </View>
  );
}

function buyButton(item) {
  return (
    <TouchableOpacity
      style={{
        width: width * 0.95,
        height: height * 0.08,
        backgroundColor: "#32CD32",
        alignSelf: "center",
        borderRadius: 10,
        marginTop: width * 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Feather name="shopping-bag" size={30} color="white" />
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
            marginLeft: 10,
          }}
        >
          Add to cart
        </Text>
      </View>
      <View
        style={{
          height: "50%",
          width: 0,
          borderWidth: 2,
          borderRadius: 20,
          borderColor: "white",
        }}
      />
      <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
        {item.price}
      </Text>
    </TouchableOpacity>
  );
}
const Buy = ({ route }) => {
  const navigation = useNavigation();
  const { item } = route.params;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
      }}
    >
      {header(navigation)}

      <View
        style={{
          flexDirection: "row",
          height: height * 0.4,
          marginTop: 20,
        }}
      >
        {imageOfThePlant(item)}
        {details()}
      </View>

      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "bold",
          marginTop: width * 0.1,
          paddingHorizontal: 10,
        }}
      >
        {item.name}
      </Text>
      <Text
        style={{
          color: "rgba(255,255,255,0.5)",
          paddingHorizontal: 10,
          marginTop: width * 0.1,
        }}
      >
        {item.name} is a species of flowering plant native to tropical forests
        of southern Mexico, south to Panama. It has been introduced in to many
        tropical areas.
      </Text>
      {buyButton(item)}
    </View>
  );
};

export default Buy;
