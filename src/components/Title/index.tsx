import { StyleSheet, Text, View } from "react-native";
import { styles } from "./styled";

export default function Title() {
  return (
    <View style={styles.boxTitle}>
      <Text style={styles.textTitle}>ONEBITHEALTH</Text>
    </View>
  );
}
