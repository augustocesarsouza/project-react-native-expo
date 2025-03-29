import {
  Button,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import { styles } from "./styles";

export default function Form() {
  const [height, setHeight] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [messageImg, setMessageImg] = useState("preencha o peso e altura");
  const [imc, setImc] = useState<string | null>(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const imcCalculator = (weight: number, height: number) => {
    return setImc((weight / (height * height)).toFixed(2));
  };

  const verificationImc = () => {
    if (height === null || weight === null) {
      Vibration.vibrate();
      setErrorMessage("Preencha todos os campos");
    }
  };

  function validationImg() {
    if (weight !== null && height !== null) {
      let heightFormat = Number(String(height).replace(/,/g, "."));

      const weightNumber = Number(weight);

      imcCalculator(weightNumber, heightFormat);
      setHeight(null);
      setWeight(null);
      setMessageImg("Seu imc é igual:");
      setTextButton("Calcular Novamente");
      setErrorMessage(null);

      return;
    }

    verificationImc();
    setImc(null);
    setMessageImg("preencha o peso e altura");
    setTextButton("Calcular");
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          onChangeText={setHeight}
          value={height ? height.toString() : ""}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          style={styles.input}
        ></TextInput>
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight ? weight.toString() : ""}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
          style={styles.input}
        ></TextInput>
        <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImg()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
      </View>

      <ResultImc messageResultImc={messageImg} resultImc={imc ? imc : ""} />
    </Pressable>
  );
}
