import React, { useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

const ColorScreen = () => {
  const [color, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a color"
        onPress={() => setColors([...color, randomRGB()])}
      />

      <FlatList
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 150, width: 150, backgroundColor: item }}
            ></View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const randomRGB = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};

export default ColorScreen;
