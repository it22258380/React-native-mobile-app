import BottomNav from "@/components/BottomNav";
import React from "react";
import {
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Define the shape of each category item
type CategoryItem = {
  id: string;
  name: string;
  icon: ImageSourcePropType;
};

const categories: CategoryItem[] = [
  { id: "1", name: "Mobiles", icon: require("../assets/images/mobile.png") },
  { id: "2", name: "Electronics", icon: require("../assets/images/electronics.png") },
  { id: "3", name: "Vehicles", icon: require("../assets/images/vehicles.png") },
  { id: "4", name: "Property", icon: require("../assets/images/property.png") },
  { id: "5", name: "Home & Garden", icon: require("../assets/images/garden.png") },
  { id: "6", name: "Animals", icon: require("../assets/images/animals.png") },
  { id: "7", name: "Services", icon: require("../assets/images/service.png") },
  { id: "8", name: "Business & Industry", icon: require("../assets/images/industry.png") },
  { id: "9", name: "Jobs", icon: require("../assets/images/jobs.png") },
  { id: "10", name: "Hobby, Sport & Kids", icon: require("../assets/images/sports.png") },
  { id: "11", name: "Fashion & Beauty", icon: require("../assets/images/fashion.png") },
  { id: "12", name: "Essentials", icon: require("../assets/images/essential.png") },
  { id: "13", name: "Education", icon: require("../assets/images/education.png") },
  { id: "14", name: "Agriculture", icon: require("../assets/images/agriculture.png") },
  { id: "15", name: "Work Overseas", icon: require("../assets/images/work.png") },
  { id: "16", name: "Other", icon: require("../assets/images/other.png") },
];

export default function Category() {
  const renderCategory: ListRenderItem<CategoryItem> = ({ item }) => (
    <TouchableOpacity
      onPress={() => console.log("Pressed", item.name)}
      style={{
        flex: 1,
        margin: 8,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
      }}
    >
      <Image
        source={item.icon}
        style={{ width: 48, height: 48 }}
        resizeMode="contain"
      />
      <Text style={{ marginTop: 8, textAlign: "center" }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, backgroundColor: "#f9f9f9" }}>
      {/* Header with search */}
      <View style={{ backgroundColor: "#0b792efe", padding: 16 }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "#fff",
            borderRadius: 25,
            paddingHorizontal: 16,
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="What are you looking for?"
            style={{ flex: 1, height: 40 }}
          />
          <Icon name="search" size={22} color="green" />
        </View>
        
      </View>
      <View><Text style={{ color: "#000000ff", marginTop: 10 }}> All of Sri Lanka</Text></View>

      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={{ padding: 8, paddingBottom: 100 }}
      />

      <BottomNav />
    </View>
  );
}
