import { StyleSheet, Text, View } from "react-native";
import Form from "../Form";

export default function Main() {
  return (
    <View style={styles.container}>
      <Form />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza o texto
    flex: 1,
    padding: 0,
  },
  title: {
    fontSize: 25,
    color: "red",
  },
});
