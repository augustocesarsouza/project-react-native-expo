import {
  FlatList,
  Keyboard,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  View,
} from "react-native";
import ResultImc from "./ResultImc";
import { useState } from "react";
import { styles } from "./styles";

interface imgListProps {
  id: number;
  imc: string;
}

export default function Form() {
  const [height, setHeight] = useState<string | null>(null);
  const [weight, setWeight] = useState<string | null>(null);
  const [messageImg, setMessageImg] = useState("preencha o peso e altura");
  const [imc, setImc] = useState<string | null>(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [imcList, setImcList] = useState<imgListProps[] | null>(null);

  const imcCalculator = (weight: number, height: number) => {
    const value = (weight / (height * height)).toFixed(2);
    setImcList((prev) => {
      const newItem = { id: new Date().getTime(), imc: value };

      return prev ? [...prev, newItem] : [newItem];
    });

    return setImc(value);
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
    } else {
      verificationImc();
      setImc(null);
      setMessageImg("preencha o peso e altura");
      setTextButton("Calcular");
    }
  }

  return (
    <View style={styles.formContext}>
      {imc === null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.formMain}>
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
          </View>
          <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImg()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </Pressable>
      ) : (
        <View style={styles.containerExhibitionResultImc}>
          <ResultImc messageResultImc={messageImg} resultImc={imc ? imc : ""} />
          <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationImg()}>
            <Text style={styles.textButtonCalculator}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}

      <FlatList
        showsVerticalScrollIndicator={true}
        style={styles.listImcs}
        data={imcList?.reverse()}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textGlobal}>
              Resultado IMC = <Text style={styles.textValueImc}>{item.imc}</Text>
            </Text>
          );
        }}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
