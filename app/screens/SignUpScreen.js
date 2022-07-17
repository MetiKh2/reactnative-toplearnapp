import { Image, StyleSheet, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import { CustomSubmitForm, CustomForm, CustomFormField } from "../components/";
import Screen from "./../components/shared/Screen";
import { registerUser } from "../api/users";
import Toast from "react-native-tiny-toast";
import {loadingToast, showToast} from "../utils/toasts"
const validationSchema = Yup.object().shape({
  email: Yup.string().required("ایمیل اجباری است").email("ایمیل صحیح نیست"),
  password: Yup.string()
    .required("رمز عبور اجباری است")
    .min(4, "رمز عبور حداقل 4 حرف باشد"),
  passwordConfirmation: Yup.string()
    .required("تکرار رمز عبور اجباری است")
    .min(4, "تکرار رمز عبور حداقل 4 حرف باشد")
    .oneOf([Yup.ref("password"), null], "رمز عبور با تکرار آن برابر نیست"),
  fullname: Yup.string().required("نام و نام خانوادگی اجباری است"),
});
const SignUpScreen = ({ navigation }) => {
  const handleUserRegistration = async (user) => {
    try {
      loadingToast("در حال بررسی ...")
      const status = await registerUser(user);
      Toast.hide();
      if (status == 201) {
        navigation.navigate("Login",{registerSuccess: true});
      } else {
        //show error
       showToast("ایمیل یا نام قبلا توسط شخص دیگری استفاده شده")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/logo.png")} />
      <CustomForm
        initialValues={{
          email: "",
          password: "",
          fullname: "",
          passwordConfirmation: "",
        }}
        onSubmit={(values) => {
          console.log(values);
          handleUserRegistration(values);
        }}
        validationSchema={validationSchema}
      >
        <CustomFormField
          name={"fullname"}
          icon={"account-circle"}
          placeholder="نام و نام خانوادگی"
          placeholderTextColor="royalblue"
        />
        <CustomFormField
          icon={"email"}
          placeholder="ایمیل کاربری"
          autoCorrect={false}
          keyboardType="email-address"
          placeholderTextColor="royalblue"
          name={"email"}
        />
        <CustomFormField
          icon={"onepassword"}
          placeholder="رمز عبور"
          autoCorrect={false}
          placeholderTextColor="royalblue"
          secureTextEntry={true}
          name="password"
        />
        <CustomFormField
          icon={"onepassword"}
          placeholder="تکرار رمز عبور"
          autoCorrect={false}
          placeholderTextColor="royalblue"
          secureTextEntry={true}
          name="passwordConfirmation"
        />
        <CustomSubmitForm color={"#66cdaa"} title={"ثبت نام کاربر"} />
      </CustomForm>
      {/* {loading ? <ActivityIndicator size="large" color="#0000ff" /> : null} */}
    </Screen>
  );
};

export default SignUpScreen;

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
