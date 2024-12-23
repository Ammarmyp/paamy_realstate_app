import { SplashScreen, Stack } from "expo-router";
import "./global.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded, error] = useFonts({
    "Lexend-Bold": require("../assets/fonts/Lexend-Bold.ttf"),
    "Lexend-ExtraBold": require("../assets/fonts/Lexend-ExtraBold.ttf"),
    "Lexend-Light": require("../assets/fonts/Lexend-Light.ttf"),
    "Lexend-Medium": require("../assets/fonts/Lexend-Medium.ttf"),
    "Lexend-Regular": require("../assets/fonts/Lexend-Regular.ttf"),
    "Lexend-SemiBold": require("../assets/fonts/Lexend-SemiBold.ttf"),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);

  if (!fontLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
