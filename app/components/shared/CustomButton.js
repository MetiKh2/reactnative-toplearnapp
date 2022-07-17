import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from './CustomText';

const CustomButton = ({ title, onPress, color = "deepskyblue" }) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor:color}]} onPress={onPress}>
      <CustomText fontFamily={'ih'} size={2.5} styles={styles.text}>{title}</CustomText>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    borderRadius:15,
    justifyContent:'center',
    alignItems:'center',
    padding:15,
    width: '100%',
    marginVertical:5
  },
  text: {
    color: '#fff',
    fontFamily:'ih',
  },
});
