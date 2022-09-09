import { View, Text } from "react-native";
import React from "react";
import Yup from "yup";
const uploadPostSchema = () =>
  Yup.object().shape({
    imageUrl: Yup.string().url().required("A URL is required"),
    caption: Yup.string().max(2200, "Caption has reached the character limit."),
  });

const FormikPostUploader = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>FormikPostUploader</Text>
    </View>
  );
};

export default FormikPostUploader;
