import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {SignUpScreen,WelcomeScreen,LoginScreen} from "../screens";
import TabNavigators from "./TabsNavigator";
import CourseDetailsScreen from '../screens/CourseDetailsScreen';
const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} initialParams={{registerSuccess:false}} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Home" component={TabNavigators} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />

      </Stack.Navigator>
  )
}

export default StackNavigator
