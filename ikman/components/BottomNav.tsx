import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function BottomNav() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        paddingVertical: 10,
        borderTopWidth: 1,
        borderTopColor: "#ddd",
        backgroundColor: "#fff",
      }}
    >
      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon name="home-outline" size={24} />
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon name="search-outline" size={24} />
        <Text>Search</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: "orange",
          borderRadius: 40,
          padding: 12,
          marginTop: -20,
        }}
      >
        <Icon name="add" size={28} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon name="chatbubble-outline" size={24} />
        <Text>Chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ alignItems: "center" }}>
        <Icon name="person-outline" size={24} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
}
