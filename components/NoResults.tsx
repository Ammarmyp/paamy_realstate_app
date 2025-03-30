import { View, Text, Image } from "react-native";
import React from "react";
import images from "@/constants/images";

const NoResults = () => {
  return (
    <View className="flex flex-col items-center my-5">
      <Image
        source={images.noResult}
        className="w-11/12 h-80 "
        resizeMode="contain"
      />
      <Text className="text-2xl font-lexend-bold text-black-300 mt-5">
        NoResults
      </Text>
      <Text className="text-base text-black-100 mt-2">
        We could not Provide properties at this moment!
      </Text>
    </View>
  );
};

export default NoResults;
