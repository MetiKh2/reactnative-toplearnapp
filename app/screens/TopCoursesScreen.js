import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
import { useContext, useEffect } from "react";
import ToplearnContext from "./../context/ToplearnContext";
import RenderItems from "./../components/shared/RenderItems";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { decodeToken } from "../utils/jwt";
import { useSelector } from 'react-redux';

const TopCoursesScreen = ({ navigation }) => {
  const courses = useSelector(p=>p.courses);
  useEffect(() => {
    const func = async () => {
      const token=await AsyncStorage.getItem("token");
      console.log(token);
      console.log(decodeToken(token));
    };
    func();
  }, []);
  return (
    <Screen style={styles.container}>
      <RenderItems loading={!courses}>
        <>
          <FlatList
            data={courses}
            keyExtractor={(course) => course._id.toString()}
            renderItem={({ item: course }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("CourseDetails", { course })}
              >
                <Card
                  title={course?.title}
                  image={course?.imageUrl}
                  price={course?.price}
                  time={"10.00.00"}
                  teacher={"مهدی خدارحیمی"}
                />
              </TouchableOpacity>
            )}
          />
        </>
      </RenderItems>
    </Screen>
  );
};

export default TopCoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
