import TabBarIcon from "@/components/TabBarIcon";
import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          position: "absolute",
          borderTopColor: "#FF8000",
          borderTopWidth: 1,
          minHeight: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon icon={icons.home} title="Home" isFocused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon={icons.search}
              title="Explore"
              isFocused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              icon={icons.person}
              title="Profile"
              isFocused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
