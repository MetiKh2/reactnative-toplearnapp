import { View } from "react-native";
import React from "react";
import CustomButton from "./shared/CustomButton";
import { useFormikContext } from "formik";
const CustomSubmitForm = ({title,color}) => {
  const {handleSubmit}=useFormikContext();
    return (
    <View style={{ width: "60%", margin: "auto" }}>
      <CustomButton
        color={color}
        title={title}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default CustomSubmitForm;
