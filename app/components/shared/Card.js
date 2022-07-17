import { StyleSheet, Text, View, Image,ScrollView } from "react-native";
import React from "react";
import { numberWithCommas } from "./../../utils/price";
import CustomText from './CustomText';

const Card = ({ image, title, price, time, teacher, courseInfo = null }) => {
  return (
    <View style={styles.card}>
      <Image resizeMode="contain" style={styles.image} source={{
        uri:`https://rnapi.ghorbany.dev/${image}`
      }} />
      <View style={{ padding: 20 }}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.details}>
          <Text style={styles.price}>
            قیمت دوره : {price>0?`${numberWithCommas(price)} تومان`:'رایگان'}
          </Text>
          <Text style={styles.time}>زمان دوره : {time}</Text>
        </View>
        <View style={styles.userContainer}>
          <Text style={styles.teacher}> استاد  : {teacher}</Text>
        </View>
      </View>
      {courseInfo && <View style={{ padding: 20,flex:1 }}>
          <CustomText color='#000' fontFamily="yekan" size={2.5}>توضیحات دوره : </CustomText>
          <ScrollView style={{paddingBottom:40}}>
            <CustomText styles={styles.courseInfo} color='#000' fontFamily='ih' size='1.75'>
            {courseInfo}
            </CustomText>
          </ScrollView>
        </View>}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    marginBottom: 20,
    overflow: "hidden",
    flex: 1
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    marginBottom: 7,
    fontFamily: "yekan",
    fontSize: 20,
    alignSelf: "center",
  },
  userContainer: {
    marginVertical: 10,
  },
  time: {
    fontFamily: "yekan",
  },
  price: {
    fontFamily: "yekan",
  },
  teacher: {
    fontFamily: "ih",
    fontSize: 15,
    alignSelf: "center",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  courseInfo:{
    textAlign:'justify',
    marginVertical:15,
    lineHeight:25,
  }
});
