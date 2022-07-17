import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from "expo-constants";
const Screen = ({children,style}) => {
  return (
    <View style={[style,styles.screen]}>
        {children}
    </View>
  )
}

export default Screen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        marginTop:Constants.statusBarHeight
    }
})