import Cards from "@/components/Cards";
import FeaturedCards from "@/components/FeaturedCards";
import Search from "@/components/Search";
import { featuredCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

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

        <View className="my-5">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-xl font-lexend-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-lexend-bold text-primary-300">
                See All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="my-5">
          <View className="flex flex-row gap-5 ">
            <FeaturedCards />
            <FeaturedCards />
          </View>
        </View>
        <View className="flex flex-row justify-between items-center">
          <Text className="text-xl font-lexend-bold text-black-300">
            Our Recommendations
          </Text>
          <TouchableOpacity>
            <Text className="text-base font-lexend-bold text-primary-300">
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row gap-5 ">
          <Cards />
          <Cards />
        </View>

        {/* <FlatList
          data={featuredCards}
          renderItem={({ item }) => <Text>{item.title}</Text>}
          keyExtractor={(item) => item.title}
          horizontal
        /> */}
      </View>
    </SafeAreaView>
  );
}
