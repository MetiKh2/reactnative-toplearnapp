import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import React, { useEffect, useState } from "react";
import Screen from "../components/shared/Screen";
import Icon from "../components/shared/Icon";
import ItemSeparator from "../components/shared/ItemSeparator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackActions } from "@react-navigation/native";
import { useSelector } from "react-redux";
import * as ImagePicker from "expo-image-picker";
const AccountScreen = ({ navigation }) => {
  const user = useSelector((s) => s.user);
  const [image, setImage] = useState(null);
  useEffect(()=>{
    const loadingImage=async()=>{
      const imageUri=await AsyncStorage.getItem('userImage');
      if(imageUri)setImage(imageUri)
    }
    loadingImage()
  },[])
  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("userId");
    navigation.dispatch(StackActions.replace("Welcome"));
  };
  const pickImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      await AsyncStorage.setItem("userImage",result.uri)
    }
  };
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <TouchableOpacity onPress={pickImage}>
          {!image && (
            <Image
              style={styles.image}
              source={require("../assets/personal.jpg")}
            />
          )}
          {image && <Image source={{ uri: image }} style={styles.image} />}
        </TouchableOpacity>
        <View style={styles.details}>
          <Text style={styles.title}>{user?.fullname} </Text>
          <Text style={styles.subTitle}>{user?.email}</Text>
        </View>
        <TouchableOpacity
          style={{ alignSelf: "center", marginLeft: 20 }}
          onPress={() => {}}
        >
          <Icon name={"account-cog"} bgColor="royalblue" />
        </TouchableOpacity>
      </View>
      <ItemSeparator />
      <TouchableHighlight underlayColor={"#f8f4f4"} onPress={handleLogout}>
        <View style={styles.container}>
          <Icon name={"logout"} bgColor="royalblue" />
          <View style={styles.details}>
            <Text style={styles.title}>خروج</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginVertical: 20,
    padding: 15,
  },
  screen: {
    backgroundColor: "#f8f4f4",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 40,
  },
  details: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontFamily: "ih",
    fontSize: 20,
  },
  subTitle: {
    color: "#6e6969",
  },
});
