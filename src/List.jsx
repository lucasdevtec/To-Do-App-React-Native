import { FontAwesome } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function List({ data, deleteItem }) {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>{data.item}</Text>
      <TouchableOpacity onPress={deleteItem}>
        <FontAwesome name="trash" size={20} color={"#22272e"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { color: "#22272e" },
  conteiner: {
    backgroundColor: "rgba(196,196,196,0.20)",
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
