import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";

export default function Form() {
  const [height, setHeight] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [messageImg, setMessageImg] = useState("preencha o peso e altura");
  const [imc, setImc] = useState<string | null>(null);
  const [textButton, setTextButton] = useState("Calcular");

  const imcCalculator = (weight: number, height: number) => {
    return setImc((weight / (height * height)).toFixed(2));
  };

  function validationImg() {
    if (weight !== null && height !== null) {
      const heightNumber = Number(height);
      const weightNumber = Number(weight);

      imcCalculator(weightNumber, heightNumber);
      setHeight(null);
      setWeight(null);
      setMessageImg("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      return;
    }

    setImc(null);
    setMessageImg("preencha o peso e altura");
    setTextButton("Calcular");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height ? height.toString() : ""}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
        ></TextInput>
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight ? weight.toString() : ""}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View>
        <Button onPress={() => validationImg()} title={textButton} />
      </View>

      <ResultImc messageResultImc={messageImg} resultImg={imc ? imc : ""} />
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Centraliza o texto
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  title: {
    fontSize: 25,
    color: "red",
  },
});
