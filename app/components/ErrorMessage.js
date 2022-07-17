import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ErrorMessage = ({error,visible}) => {
    if(!error) return null;
  return (
    <>
       {visible&& <Text style={styles.text}>{error}</Text>}
    </>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
    text:{
        color:'red',
        fontSize:14,
        marginBottom:5,
        fontFamily:'ih',
    }
})