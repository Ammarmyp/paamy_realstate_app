import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";

interface CardsProps {
  onPress?: () => void;
}

const Cards = ({ onPress }: CardsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
    >
      <View className="flex flex-row items-center absolute top-5 right-5   bg-white/90 px-2 p-1 rounded-full z-50 ">
        <Image source={icons.star} className="size-2.5" />
        <Text className="font-lexend-bold text-primary-300 text-sm ml-0.5">
          4.8
        </Text>
      </View>
      <Image source={images.japan} className="w-full h-40 rounded-lg" />
      <View className="flex flex-col mt-2">
        <Text
          numberOfLines={1}
          className="text-base font-lexend-bold text-black-300"
        >
          New York
        </Text>
        <Text
          className="text-xs font-lexend-regular text-black-100"
          numberOfLines={1}
        >
          Address
        </Text>
        <View className="flex flex-row justify-between items-center mt-2">
          <Text className="text-base font-lexend-bold text-primary-300">
            $123
          </Text>
          <TouchableOpacity>
            <Image source={icons.heart} className="w-5 h-5 mr-2" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Cards;
