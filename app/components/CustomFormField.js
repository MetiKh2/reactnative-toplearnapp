import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import CustomTextInput from "./CustomTextInput";
import ErrorMessage from "./ErrorMessage";
const CustomFormField = ({ name, ...otherProps }) => {
   const {handleChange,setFieldTouched,errors,touched}= useFormikContext();
  return (
    <>
      <CustomTextInput
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
/>
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

export default CustomFormField;

const styles = StyleSheet.create({});
