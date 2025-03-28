import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, usePathname } from "expo-router";
import icons from "@/constants/icons";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const handleSearch = (text: string) => {
    setSearch(text);
  };
  return (
    <View className="flex flex-row justify-between items-center mt-5 py-2 px-4 border border-primary-100 bg-accent-100 w-full rounded-lg">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Image source={icons.search} className="size-5" />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search items here"
          className="text-sm font-lexend-regular text-black-300 ml-2 flex-1"
        />
      </View>
      <TouchableOpacity>
        <Image source={icons.filter} className="size-5" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
