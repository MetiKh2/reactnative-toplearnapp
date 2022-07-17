import { Image, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import * as Yup from "yup";
import { CustomSubmitForm, CustomForm, CustomFormField } from "../components/";
import Screen from "./../components/shared/Screen";
import { showToast, successToast,loadingToast } from "../utils/toasts";
import { loginUser } from "../api/users";
import Toast from "react-native-tiny-toast";
const validationSchema = Yup.object().shape({
  email: Yup.string().required("ایمیل اجباری است").email("ایمیل صحیح نیست"),
  password: Yup.string()
    .required("رمز عبور اجباری است")
    .min(4, "رمز عبور حداقل 4 حرف باشد"),
});

const LoginScreen = ({ navigation, route }) => {
  useEffect(() => {
    if (route?.params?.registerSuccess) successToast("ثبت نام موفقیت آمیز بود");
  }, []);
  const handleUserLogin = async (user) => {
    try {
      loadingToast("در حال برقراری ارتباط");
      const status = await loginUser(user);
      if (status == 200) {
        Toast.hide();
        successToast("ورود موفقیت آمیز");
        navigation.reset({
          index:0,
          routes:[{name:'Home'}]
        });
      } else {
        Toast.hide();
        showToast("ورود با شکست مواجه شد");
      }
    } catch (error) {
      Toast.hide();
      showToast("ورود با شکست مواجه شد");
    }
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <CustomForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(user) => {
          handleUserLogin(user);
        }}
        validationSchema={validationSchema}
      >
        <CustomFormField
          icon={"email"}
          placeholder="ایمیل کاربری"
          autoCompleteType="email"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderTextColor="royalblue"
          name={"email"}
        />
        <CustomFormField
          icon={"onepassword"}
          placeholder="رمز عبور"
          autoCompleteType="password"
          autoCorrect={false}
          placeholderTextColor="royalblue"
          secureTextEntry={true}
          name={"password"}
        />

        <CustomSubmitForm color={"#66cdaa"} title={"ورود کاربر"} />
      </CustomForm>
    </Screen>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  logo: {
    width: 270,
    height: 200,
    marginTop: 20,
    marginBottom: 40,
  },
  container: {
    alignItems: "center",
  },
});
