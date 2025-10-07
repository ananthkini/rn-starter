import React from 'react'
import { StyleSheet, Text } from 'react-native';

const ComponentsScreen = () => {
    const greetings = "Hi there"
  return (
    <Text style={styles.textSize}>{greetings}</Text>
  )
}

const styles = StyleSheet.create({
    textSize:{
        fontSize:30,
    }
})

export default ComponentsScreen;