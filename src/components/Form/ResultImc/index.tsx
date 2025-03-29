import { StyleSheet, Text, View } from "react-native";

interface ResultImcProps {
  messageResultImc: string;
  resultImg: string;
}

export default function ResultImc({ messageResultImc, resultImg }: ResultImcProps) {
  return (
    <View>
      <Text>
        {messageResultImc} {resultImg}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza o texto
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 25,
    color: "red",
  },
});
