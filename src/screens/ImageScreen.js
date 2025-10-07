import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImageDetail from "../Components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} imageScore={8}/>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} imageScore={6}/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} imageScore={7}/>
      
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
