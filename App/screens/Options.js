import React from "react";
import { Alert, Linking, SafeAreaView, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";
import RowItem from "../components/RowItem";
import RowSeparator from "../components/RowSeparator";

const openUrl = (url) => {
  return Linking.openURL(url).catch((err) => {
    Alert.alert("Sorry! Something went wrong.", `${err}`);
  });
};

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <RowItem
          text="Themes"
          onPress={() => openUrl("https://krnblni.github.io")}
          rightIcon={
            <Entypo name="chevron-right" size={20} color={colors.blue} />
          }
        />

        <RowSeparator />

        <RowItem
          text="React Native Basics"
          onPress={() => openUrl("httpst://krnblni.github.io")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          onPress={() => openUrl("https://krnblni.github.io")}
          rightIcon={<Entypo name="export" size={20} color={colors.blue} />}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
