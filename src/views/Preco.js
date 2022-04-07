import { View, Text, StyleSheet } from "react-native";

export default function Preco() {
  return (
    <View>
      <Text style={styles.productPrice}>R$ 4.000,00</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productPrice: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    fontSize: 30,
    color: "#106510",
    fontWeight: "bold",
  },
});