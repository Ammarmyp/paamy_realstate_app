import { Link } from "expo-router";
import { Text, useColorScheme, View, StyleSheet } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container]}>
      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/explore"}>Expore</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/properties/2"}>Property detail</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {},
  lightContainer: {
    backgroundColor: "#d0d0c0",
  },
  darkContainer: {
    backgroundColor: "#242c40",
  },

  lightThemeText: {
    color: "#242c40",
  },
  darkThemeText: {
    color: "#d0d0c0",
  },
});
