import { StyleSheet, Text, View } from "react-native";

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONEBITHEALTH</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza o texto
    justifyContent: "flex-end",
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 20,
    color: "red",
  },
});
