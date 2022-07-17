import { Alert, BackHandler, Image, ImageBackground, StyleSheet,  View } from "react-native";
import React, { useEffect, useState } from "react";
import CustomButton from "../components/shared/CustomButton";
import CustomText from "../components/shared/CustomText";
import NetInfo from '@react-native-community/netinfo'
import AsyncStorage  from '@react-native-async-storage/async-storage';
import { decodeToken } from "../utils/jwt";
import { StackActions,useNavigationState } from "@react-navigation/native";
import { showToast } from './../utils/toasts';
import { useDispatch } from "react-redux";
import { userAction } from "../action";
const WelcomeScreen = ({ navigation }) => {
  const [isConnected, setIsConnected] = useState(true)
  const dispatch = useDispatch();
  const screenIndex=useNavigationState(s=>s.index)
    useEffect(()=>{
      const unsubscribe = NetInfo.addEventListener(async state => {
        setIsConnected(state.isConnected);
        if(state.isConnected){
          const token=await AsyncStorage.getItem('token');
          const userId=JSON.parse(await AsyncStorage.getItem('userId'));
          if(token!=null&&userId!=null){
            const decodedToken  =decodeToken(token) ;
            dispatch(userAction(decodedToken.user))
            if(decodedToken.user.userId==userId){
              navigation.dispatch(
                StackActions.replace('Home')
              )
            }else {
              await AsyncStorage.removeItem('token') ;
              await AsyncStorage.removeItem('userId') ;
              navigation.navigate('Login')
            }
          }
        }
      });
      unsubscribe();
    },[])
    useEffect(()=>{
      let currentCount=0;
      if(screenIndex<=0){
        BackHandler.addEventListener('hardwareBackPress',
        ()=>{
          if(currentCount==1){
            BackHandler.exitApp();
            return true;
          }
          currentCount++;
          showToast('برای خروج دوبار دکمه برگشت را لمس کنید')
          setTimeout(() => {
            currentCount=0;
          }, 2000);
          return true;
        })
      }
     return()=> BackHandler.removeEventListener('hardwareBackPress');
    },[])
  return (
    <ImageBackground
      source={require("../assets/bg4.jpg")}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.logoContainer}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <CustomText fontFamily={'ih'} size='3' styles={styles.firstText}>
          خودآموزی, کسب تجربه, ورود به بازار کار
        </CustomText>
      </View>
     {isConnected? <View style={styles.buttonContainer}>
        <CustomButton
          title="ورود"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <CustomButton
          title="ثبت نام"
          onPress={() => {navigation.navigate("SignUp")}}
          color="mediumseagreen"
        />
      </View>:Alert.alert('دستگاه به اینترنت متصل نیست')}
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
  logo: {
    width: 255,
    height: 180,
  },
  firstText: {
    fontFamily: "ih",
    fontSize: 22,
    color: "#fff",
    marginTop: 15,
  },
  logoContainer: {
    position: "absolute",
    top: 50,
    alignItems: "center",
  },
});
