import icons from "@/constants/icons";
import images from "@/constants/images";
import { login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/gloabl-provider";
import { Redirect } from "expo-router";
import React from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const signIn = () => {
  const { refetch, loading, isLoggedIn } = useGlobalContext();

  if (!loading && isLoggedIn) return <Redirect href="/" />;
  const handleLogin = async () => {
    // Implement Google Login
    const result = await login();
    if (result) {
      console.log("login is successfull");
      refetch({});
    } else {
      Alert.alert("Error", "Failed to login ");
    }
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerClassName="h-full">
        <Image
          source={images.onboarding}
          className="w-full h-4/6"
          resizeMode="contain"
        />
        <View className="px-10">
          <Text className="text-base text-center uppercase font-lexend-bold text-black-200">
            Welcome to Paamy Real State
          </Text>
          <Text className=" text-3xl text-center text-black-300 mt-2 font-lexend-bold">
            Let&apos;s Get You Closer to {"\n"}
            <Text className="text-primary-300 ">Your Ideal Home</Text>
          </Text>
          <Text className="text-lg font-lexend text-black-200 text-center mt-5">
            Login to Paamy Real State with Google
          </Text>
          <TouchableOpacity
            className="bg-white shadow-lg shadow-zinc-300 rounded-full w-full mt-5 py-4"
            onPress={handleLogin}
          >
            <View className="flex-row justify-center items-center">
              <Image
                source={icons.google}
                className="w-5 h-5"
                resizeMode="contain"
              />
              <Text className="text-black-300 text-lg font-lexend-medium ml-2">
                continue with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default signIn;
