import { Link } from "expo-router";
import { Text, useColorScheme, View, StyleSheet } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[styles.container]}
      className="font-lexend-bold text-primary-100"
    >
      <Link
        href={"/sign-in"}
        className="font-lexend-bold text-primary-300 text-3xl "
      >
        Sign In
      </Link>
      <Link
        href={"/explore"}
        className="font-lexend-bold text-primary-300 text-3xl "
      >
        Expore
      </Link>
      <Link
        href={"/profile"}
        className="font-lexend-bold text-primary-300 text-3xl "
      >
        Profile
      </Link>
      <Link
        href={"/properties/27"}
        className="font-lexend-bold text-primary-300 text-3xl "
      >
        Property detail
      </Link>
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
