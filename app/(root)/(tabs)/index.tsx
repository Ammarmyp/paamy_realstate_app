import { Link } from "expo-router";
import { Text, useColorScheme, View, StyleSheet } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[styles.container]}
      className="font-lexend-bold text-primary-100"
    >
      <Text className="text-primary-300 text-2xl font-lexend-bold">
        WELCOME TO PAAMY REAL ESTATE
      </Text>
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
