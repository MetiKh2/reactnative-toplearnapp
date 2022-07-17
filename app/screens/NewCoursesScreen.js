import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Screen from "../components/shared/Screen";
import Card from "../components/shared/Card";
import { useContext } from "react";
import ToplearnContext from "../context/ToplearnContext";
import RenderItems from "../components/shared/RenderItems";
import { useSelector } from 'react-redux';

const NewCoursesScreen = ({navigation}) => {
  const courses = useSelector(p=>p.courses);
  return (
    <Screen style={styles.container}>
      <RenderItems loading={!courses} >
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

export default NewCoursesScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f8f4f4",
  },
});
