import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import icons from "@/constants/icons";

interface SettingsItemProps {
  icon: ImageSourcePropType;
  title: string;
  onPress?: () => void;
  textStyle?: string;
  showArrow?: boolean;
}

const SettingsItem = ({
  icon,
  title,
  onPress,
  textStyle,
  showArrow = true,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      className="flex flex-row justify-between items-center py-3"
      onPress={onPress}
    >
      <View className="flex flex-row items-center gap-2">
        <Image source={icon} className="size-6" />
        <Text
          className={`font-lexend-medium text-lg text-black-300 ${textStyle}`}
        >
          {title}
        </Text>
      </View>
      {showArrow && <Image source={icons.rightArrow} className="size-5" />}
    </TouchableOpacity>
  );
};

export default SettingsItem;
