import {Text } from 'react-native'
import React from 'react'
import { RFPercentage } from 'react-native-responsive-fontsize'
const CustomText = ({styles,size=2,fontFamily='yekan',children,color='#fff'}) => {
  return (
      <Text style={[styles,{fontFamily,fontSize:RFPercentage(size),color}]}>
        {children}
      </Text>
  )
}

export default CustomText
