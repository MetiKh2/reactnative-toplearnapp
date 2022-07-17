import { StyleSheet, I18nManager,LogBox } from "react-native";
import React from "react";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./app/containers/StackNavigator";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {Provider} from "react-redux"
import { store } from "./app/store";
LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
])
//* Support for rtl language
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

export default function App() {
  const [loaded] = Font.useFonts({
    yekan: require("./app/assets/fonts/byekan.ttf"),
    ih: require("./app/assets/fonts/ih.ttf"),
  });

  if (!loaded) {
    return null;
  }
  return (
    <GestureHandlerRootView style={{flex: 1}} >
    <NavigationContainer>
      <Provider store={store}>
      <StackNavigator />
      </Provider>
    </NavigationContainer>
    </GestureHandlerRootView >

  );
}

const styles = StyleSheet.create({
  container: {},
});
