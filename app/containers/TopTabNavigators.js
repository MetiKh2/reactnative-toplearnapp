import React, { useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CoursesScreen from "../screens/CoursesScreen";
import Screen from "../components/shared/Screen";
import NewCoursesScreen from "../screens/NewCoursesScreen";
import TopCoursesScreen from "../screens/TopCoursesScreen";
import { RFPercentage } from 'react-native-responsive-fontsize';
import ToplearnContext from "../context/ToplearnContext";
import Toast  from 'react-native-tiny-toast';
import { useDispatch } from 'react-redux';
import { getCourses } from "../action";

const TopTab = createMaterialTopTabNavigator();
const TopTabNavigators = () => {
  const dispatch=useDispatch();
  useEffect(() => {
 try {
  const fetchData=async ()=>{
    Toast.showLoading("در حال بارگذاری...", {
      position: Toast.position.CENTER,
      textStyle: {
          fontFamily: "yekan",
          fontSize: RFPercentage("1.5"),
      },
      shadow: true,
  });
    dispatch(getCourses())
    Toast.hide();
   }
   fetchData()
 } catch (errors) {
  
 }
  }, []);
  return (
 
<Screen>
      <TopTab.Navigator
      backBehavior="none"
      screenOptions={{
        tabBarActiveTintColor:'royalblue',
        tabBarLabelStyle:{
            fontFamily:'ih',
            fontSize:RFPercentage(2),
        },
        tabBarInactiveTintColor:'gray',
        tabBarStyle:{backgroundColor:'#'}
      }}
      initialRouteName='TopCourses'
      >
        <TopTab.Screen
          options={{
            tabBarLabel: "همه دوره ها",
          }}
          name="AllCourses"
          component={CoursesScreen}
        />

        <TopTab.Screen
          options={{
            tabBarLabel: "جدیدترین دوره ها",
          }}
          name="NewCourses"
          component={NewCoursesScreen}
        />

        <TopTab.Screen
          options={{
            tabBarLabel: "بهترین دوره ها",
          }}
          name="TopCourses"
          component={TopCoursesScreen}
        />
      </TopTab.Navigator>
    </Screen>
 
  );
};

export default TopTabNavigators;
