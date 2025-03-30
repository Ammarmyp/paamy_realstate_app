import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import images from "@/constants/images";
import icons from "@/constants/icons";
import { Models } from "react-native-appwrite";

interface FeaturedCardsProps {
  item: Models.Document;
  onPress?: () => void;
}

const FeaturedCards = ({
  item: { image, rating, address, name, price },
  onPress,
}: FeaturedCardsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image source={{ uri: image }} className="size-full rounded-2xl" />
      <Image
        source={images.cardGradient}
        className="size-full absolute bottom-0 rounded-2xl"
      />
      <View className="absolute top-5 right-5 flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full ">
        <Image source={icons.star} className="size-3.5" />
        <Text className="font-lexend-semi-bold text-sm ml-1">{rating}</Text>
      </View>
      <View className="flex flex-col items-start absolute inset-x-5 bottom-5">
        <Text
          numberOfLines={1}
          className="text-xl font-lexend-extrabold text-white"
        >
          {name}
        </Text>
        <Text
          className="text-base font-lexend-regular text-white"
          numberOfLines={1}
        >
          {address}
        </Text>
        <View className="flex flex-row justify-between items-center w-full">
          <Text className="text-xl font-lexend-extrabold text-white">
            ${price}
          </Text>
          <TouchableOpacity>
            <Image source={icons.heart} className="size-5" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCards;
