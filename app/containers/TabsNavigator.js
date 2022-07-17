import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {AccountScreen,MyCoursesScreen} from '../screens'
import React from "react";
import TopTabNavigators from './TopTabNavigators';
const Tab = createBottomTabNavigator();
const TabNavigators = ({route}) => {
  return (
    <Tab.Navigator
    initialRouteName="Courses"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Courses") {
            iconName = focused ? "file-video" : "school";
          } else if (route.name === "Account") {
            iconName = focused ? "account-circle" : "account-circle-outline";
          } else if (route.name === "MyCourses") {
            iconName = "message-video";
          }
          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarActiveBackgroundColor: "skyblue",
        tabBarLabelStyle: {
          fontSize: 13,
          fontFamily: "ih",
        },
        headerShown:false
      })}
    >
      <Tab.Screen
        options={{
          tabBarLabel: "دوره های من",
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            backgroundColor: "green",
            fontSize: 10,
          },
        }}
        name="MyCourses"
        component={MyCoursesScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "حساب من",
        }}
        name="Account"
        component={AccountScreen}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "دوره ها",
        }}
        name="Courses"
        component={TopTabNavigators}
      />
    </Tab.Navigator>
  );
};

export default TabNavigators;
