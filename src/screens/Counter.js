import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementCounter = () => {
        setCounter(counter+1)
    }

    const decrementCounter = () => {
        setCounter(counter-1)
    }
  return (
    <View>
        <Button title="Increase" onPress={incrementCounter}></Button>
        <Button title="Decrease" onPress={decrementCounter}></Button>
        <Text>Counter : {counter} </Text>
    </View>
  )
}

const styles = StyleSheet.create({

})

export default Counter