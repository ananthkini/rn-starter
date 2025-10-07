import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const ImageDetail = ({title, imageSource,imageScore}) => {
    
  return (
    <View>
        <Image source={imageSource}/>
        <Text>{title}</Text>
        <Text>Image score - {imageScore}</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default ImageDetail