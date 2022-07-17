import { StyleSheet, View } from 'react-native'
import React from 'react'

const ItemSeparator = ({height=1}) => {
  return (
    <View style={[styles.itemSeparator,{height}]}/>
  )
}

export default ItemSeparator

const styles = StyleSheet.create({
  itemSeparator:{
    width: '100%',
    backgroundColor:'gray',
  }
})