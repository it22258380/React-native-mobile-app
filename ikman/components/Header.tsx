import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header() {
  return (
    <View style={styles.container}>
      {/* Top green bar */}
      <View style={styles.topBar}>
        <View style={styles.logoRow}>
          {/* Logo */}
          <Image
            source={require("../assets/images/icon.png")}
            style={styles.logo}
          />
          <View>
            <Text style={styles.brand}>ikman</Text>
            <Text style={styles.results}>380,739 results</Text>
          </View>
        </View>

        {/* Save search button */}
        <TouchableOpacity style={styles.saveBtn}>
          <Icon name="bookmark-outline" size={20} color="#fff" />
          <Text style={styles.saveText}>Save search</Text>
        </TouchableOpacity>
      </View>

      {/* Filter row */}
      <View style={styles.filterRow}>
        <TouchableOpacity style={styles.filterItem}>
          <Icon name="location-outline" size={18} color="#009877" />
          <Text style={styles.filterText}>Location</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.filterItem}>
          <Icon name="pricetag-outline" size={18} color="#009877" />
          <Text style={styles.filterText}>Category</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.filterItem}>
          <Icon name="options-outline" size={18} color="#009877" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  topBar: {
    backgroundColor: "#009877",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    width: 35,
    height: 35,
    marginRight: 8,
    resizeMode: "contain",
  },
  brand: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  results: {
    color: "#fff",
    fontSize: 12,
  },
  saveBtn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  saveText: {
    color: "#fff",
    fontSize: 14,
  },
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  filterItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  filterText: {
    fontSize: 14,
    color: "#333",
  },
  divider: {
    width: 1,
    backgroundColor: "#ddd",
    marginHorizontal: 10,
  },
});
