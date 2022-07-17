import { ActivityIndicator } from "react-native";

const RenderItems = ({ loading, children }) => {
  return (
    <>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : children}
    </>
  );
};

export default RenderItems;
