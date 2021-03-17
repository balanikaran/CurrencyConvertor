import React from "react";
import {
  View,
  StatusBar,
  StyleSheet,
  Image,
  Dimensions,
  Text,
} from "react-native";
import { format } from "date-fns";

import ConversionInput from "../components/ConversionInput";
import Button from "../components/Button";

import colors from "../constants/colors";

const screen = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  logoBackground: {
    width: screen.width * 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.height * 0.25,
  },
  textHeader: {
    fontSize: 30,
    color: colors.white,
    fontWeight: "bold",
    marginVertical: 20,
    textAlign: "center",
  },
  infoText: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
});

export default () => {
  const baseCurrency = "USD";
  const targetCurrency = "GBP";
  const conversionRate = 0.8345;
  const date = new Date();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={colors.blue} />
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput
        text="USD"
        value="123"
        onButtonPress={() => alert("todo!")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
      />
      <ConversionInput
        text="GBP"
        value="123"
        onButtonPress={() => alert("todo!")}
        onChangeText={(text) => console.log("text", text)}
        keyboardType="numeric"
        editable={false}
      />

      <Text style={styles.infoText}>
        {`1 ${baseCurrency} = ${conversionRate} ${targetCurrency} as of ${format(
          date,
          "MMMM do, yyyy"
        )}`}
      </Text>

      <Button onPress={() => alert("todo!")} text="Reverse Currencies" />
    </View>
  );
};
