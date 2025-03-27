import { Image, Text, View } from "react-native";

interface TabBarIconProps {
  isFocused: boolean;
  icon: any;
  title: string;
}

const TabBarIcon = ({ isFocused, icon, title }: TabBarIconProps) => (
  <View className="flex-1 mt-3 flex flex-col items-center">
    <Image
      source={icon}
      tintColor={isFocused ? "#FF8000" : "#666876"}
      resizeMode="contain"
      className="size-6"
    />
    <Text
      className={`
        ${
          isFocused
            ? "text-primary-300 font-lexend-medium"
            : "text-black-200 font-lexend-regular"
        }
        text-xs w-full mt-1 text-center`}
    >
      {title}
    </Text>
  </View>
);

export default TabBarIcon;
