import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";

const CourseDetailsScreen = ({ navigation, route }) => {
  if (!route.params.course) navigation.goBack();
  const { course } = route.params;
  navigation.setOptions({
    headerShown: true,
    title: course.title,
    headerTitleStyle: {
      fontFamily: "yekan",
      color: "#fff",
      fontSize: RFPercentage(2.5),
    },
    headerStyle: {
      backgroundColor: "royalblue",
    },
  });
  return (
    <Screen>
      <Card
        {...course}
        time="10.00.00"
        teacher={"مهدی خدارحیمی"}
        image={course?.imageUrl}
        courseInfo={course?.info}
        price={course?.price}
        title={course?.title}
      />
    </Screen>
  );
};

export default CourseDetailsScreen;

const styles = StyleSheet.create({});
