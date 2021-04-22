import React from "react";
import { View, Text, Image } from "react-native";

export default function Card(props) {
  return (
    <View>
      <Image
        source={{
          uri: props.isCategory
            ? props.item.strCategoryThumb
            : props.item.strMealThumb,
        }}
        style={
          props.isCategory
            ? { width: 180, height: 110, marginTop: 10 }
            : { width: 350, height: 220 }
        }
      />
      <View
        style={{
          flexDirection: "row",
          paddingTop: 10,
          paddingHorizontal: 10,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 14,
            color: "#585a61",
          }}
        >
          {props.isCategory ? props.item.strCategory : props.item.strMeal}
        </Text>
      </View>
    </View>
  );
}
