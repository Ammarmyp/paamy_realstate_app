import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="px-5">
        <View className="flex flex-row items-center justify-between mt-5">
          <View className="flex flex-row items-center">
            <Image source={images.avatar} className="size-12 rounded-full" />
            <View className="flex flex-col items-start justify-center ml-2">
              <Text className="text-xs font-lexend-regular text-black-100">
                Hello
              </Text>
              <Text className="text-base font-lexend-medium text-black-300">
                Ammar Mohammed
              </Text>
            </View>
          </View>
          <Image source={icons.bell} className="size-6" />
        </View>
        <Search />
      </View>
    </SafeAreaView>
  );
}
