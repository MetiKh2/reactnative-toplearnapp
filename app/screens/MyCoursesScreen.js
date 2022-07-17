import { FlatList, StyleSheet, TouchableOpacity, View, Text, Alert } from "react-native";
import React, { useState } from "react";
import Screen from "../components/shared/Screen";
import { GestureHandlerRootView, RectButton } from "react-native-gesture-handler";
import CustomText from "../components/shared/CustomText";
import ItemSeparator from "../components/shared/ItemSeparator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Swipeable from "react-native-gesture-handler/Swipeable";
import Icon from "../components/shared/Icon";
const deleteAction = (course, onPress) => {
  return (
      <TouchableOpacity onPress={() => {confirmationAlert(course, onPress)}}>
          <View
              style={{
                  backgroundColor: "tomato",
                  width: 50,
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              <MaterialCommunityIcons
                  name="trash-can"
                  size={35}
                  color="#fff"
              />
          </View>
      </TouchableOpacity>
  );
};
const confirmationAlert=(course,onPress)=>{
  return Alert.alert(course.title,`از حذف ${course.title} مطمئنید ؟`,[
    {
      text:'انصراف',
      onPress:()=>{},
      styles:'cancel'
    },
    {
      text:'پاک کن بره',
      onPress,
    },
  ],{cancelable:false});
}
const MyCoursesScreen = () => {
  const [getMyCourses, setMyCourse] = useState([
    { id: 1, title: "دوره جامع NodeJs", master: "یونس قربانی" },
    { id: 2, title: "دوره جامع React Native", master: "یونس قربانی" },
    { id: 3, title: "دوره جامع ReactJs", master: "یونس قربانی" },
    { id: 4, title: "دوره جامع ElectronJs", master: "یونس قربانی" },
    { id: 5, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی" },
  ]);
  const handleDelete=(course)=>{
    setMyCourse(getMyCourses.filter(c=>c.id != course.id))
  }
  return (
    <Screen style={{ alignItems: "center" }}>
      <View style={styles.title}>
        <CustomText fontFamily={"yekan"} size={3} color="#fff">
          لیست دوره های من
        </CustomText>
      </View>
      <ItemSeparator height={3} />
      <View style={{ width: "100%" }}>
        <FlatList
          data={getMyCourses}
          keyExtractor={(c) => c.id.toString()}
          renderItem={({ item }) => (
            <View style={{ marginVertical: 7 }}>
              <ItemSeparator />
              <Swipeable renderLeftActions={()=>deleteAction(item,()=>handleDelete(item))}>
                <View style={styles.container}>
                  <View style={styles.details}>
                    <CustomText
                      styles={{ fontWeight: "bold" }}
                      color="black"
                      size={2}
                    >
                      {item.title}
                    </CustomText>
                    <CustomText
                      styles={{ fontWeight: "bold" }}
                      color="black"
                      size={1.5}
                    >
                      مدرس دوره : {item.master}
                    </CustomText>
                  </View>
                </View>
              </Swipeable>
              <ItemSeparator height={3} />
            </View>
          )}
        />
      </View>
    </Screen>
  );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    backgroundColor: "skyblue",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "dodgerblue",
    justifyContent: "center",
  },
  details: {
    marginLeft: 10,
    backgroundColor: "#f8f4f4",
    borderRadius: 15,
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
});
