import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CustomTextInput = ({icon,...otherProps}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.text}
      {...otherProps}
      />
      {icon&& <MaterialCommunityIcons
      name={icon}
      size={20}
      color={'dodgerblue'}
      style={styles.icon}
      />}
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        position: "relative",
        backgroundColor: "lightgray",
        marginBottom: 15,
        borderRadius: 10,
        width: "80%",
    },icon:{
        position: "absolute",
        marginLeft: 10,
        alignSelf: "center",
        marginBottom: 15,
        right: 8,
    },text:{
        width: "90%",
        height: 50,
        textAlign: "center",
        paddingLeft: 15,
        fontFamily: "yekan",
        fontSize: 16,
    }
})