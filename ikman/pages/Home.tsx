// Home.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ListRenderItem,
} from "react-native";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 36) / 2; // 2 columns with margin

// Define a type for product items
type Product = {
  id: string;
  title: string;
  price: string;
  image: string;
};

// Sample data
const data: Product[] = [
  {
    id: "1",
    title: "SEGOTEP GANK 240S GAMING CASING TOWER",
    price: "Rs 12,500",
    image: "https://via.placeholder.com/300x200.png?text=Gaming+Casing",
  },
  {
    id: "2",
    title: "Best Residential Land for Sale in Athurugiriya",
    price: "Rs 1,000,000 per perch",
    image: "https://via.placeholder.com/300x200.png?text=Land+for+Sale",
  },
  {
    id: "3",
    title: "GTX 1060 3GB OC GAMING",
    price: "Rs 65,000",
    image: "https://via.placeholder.com/300x200.png?text=GTX+1060",
  },
  {
    id: "4",
    title: "LOGITECH G102 RGB PROFESSIONAL GAMING MOUSE",
    price: "Rs 7,400",
    image: "https://via.placeholder.com/300x200.png?text=Logitech+Mouse",
  },
];

// Product card component with proper typing
const ProductCard = ({ item }: { item: Product }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
      <Text style={styles.tag}>Verified Seller</Text>
    </View>
  </TouchableOpacity>
);

export default function Home() {
  const renderItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 12,
    width: ITEM_WIDTH,
    overflow: "hidden",
    elevation: 2, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  info: {
    padding: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "green",
    fontWeight: "bold",
  },
  tag: {
    marginTop: 4,
    fontSize: 12,
    color: "#555",
  },
});
