import React, { useState, useEffect } from "react";
import { View, Keyboard, Dimensions, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default ({ onToggle }) => {
  const [keyboardSpace, setKeyboardSpace] = useState(0);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      (event) => {
        const endCoordinatesScreenY = event.endCoordinates.screenY;
        const screenHeight = Dimensions.get("window").height;
        setKeyboardSpace(screenHeight - endCoordinatesScreenY);
        onToggle(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardSpace(0);
        onToggle(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  return <View style={[styles.container, { height: keyboardSpace }]} />;
};
