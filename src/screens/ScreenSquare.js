import React, { useReducer, useState } from "react";
import { Text, View } from "react-native";
import ColorCounter from "../Components/ColorCounter";

const reducer = (state, action) => {
  switch (action.type) {
    case "change-red":
      return state.red + action.payload < 0 || state.red + action.payload > 255
        ? state
        : { ...state, red: state.red + action.payload };
    case "change-green":
        return state.green + action.payload < 0 || state.green + action.payload > 255
        ? state
        : { ...state, green: state.green + action.payload };
    case "change-blue":
        return state.blue + action.payload < 0 || state.blue + action.payload > 255
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      null;
  }
};

const INCREMENT_VALUE = 15;

const ScreenSquare = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const {red,green,blue} = state
  return (
    <View>
      <ColorCounter
        color="Red"
        value={red}
        onIncrease={() => {
          dispatch({ type: "change-red", payload: INCREMENT_VALUE });
        }}
        onDecrease={() => {
          dispatch({ type: "change-red", payload: -1 * INCREMENT_VALUE });
        }}
      />
      <ColorCounter
        color="Green"
        value={green}
        onIncrease={() => {
          dispatch({ type: "change-green", payload: INCREMENT_VALUE });
        }}
        onDecrease={() => {
          dispatch({ type: "change-green", payload: -1 * INCREMENT_VALUE });
        }}
      />
      <ColorCounter
        color="Blue"
        value={blue}
        onIncrease={() => {
          dispatch({ type: "change-blue", payload: INCREMENT_VALUE });
        }}
        onDecrease={() => {
          dispatch({ type: "change-blue", payload: -1 * INCREMENT_VALUE });
        }}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      ></View>
    </View>
  );
};

export default ScreenSquare;
