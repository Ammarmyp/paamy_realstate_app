import { Text, useColorScheme, View, StyleSheet } from "react-native";

export default function Index() {
  const colorScheme = useColorScheme();

  return (
    <View style={[styles.container]}>
      <Text className="text-3xl font-lexend-bold" style={[styles.text]}>
        Edit app/index.tsx to edit this screen.
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
