import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>HomeScreen</Text>;
      <Button
        onPress={() => {
          props.navigation.navigate("Component");
        }}
        title="Components Demo"
      />
      <Button
        title="Go to List demo"
        onPress={() => {
          props.navigation.navigate("List");
        }}
      ></Button>
      <Button
        title="Go to Image Screen"
        onPress={() => {
          props.navigation.navigate("Image");
        }}
      />
      <Button
        title="Go to Counter Screen"
        onPress={() => {
          props.navigation.navigate("Counter");
        }}
      />
      <Button
        title="Go to Color Screen"
        onPress={() => {
          props.navigation.navigate("Color");
        }}
      />
      <Button
        title="Go to Screen Square"
        onPress={() => {
          props.navigation.navigate("Square");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
