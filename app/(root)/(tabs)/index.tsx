import Cards from "@/components/Cards";
import FeaturedCards from "@/components/FeaturedCards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import { useGlobalContext } from "@/lib/gloabl-provider";
import seed from "@/lib/seed";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const { user } = useGlobalContext();
  return (
    <SafeAreaView className="bg-white h-full">
      {/* <Button title="seed" onPress={seed} /> */}
      <FlatList
        numColumns={2}
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Cards />}
        keyExtractor={(item) => item.toString()}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image
                  source={{ uri: user?.avatar }}
                  className="size-12 rounded-full"
                />
                <View className="flex flex-col items-start justify-center ml-2">
                  <Text className="text-xs font-lexend-regular text-black-100">
                    Hello
                  </Text>
                  <Text className="text-base font-lexend-medium text-black-300">
                    {user?.name}
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
              <FlatList
                data={[5, 6, 7]}
                keyExtractor={(item) => item.toString()}
                renderItem={({ item }) => <FeaturedCards />}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerClassName="flex gap-5 mt-5"
                // bounces={false}
              />
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
            <Filters />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
