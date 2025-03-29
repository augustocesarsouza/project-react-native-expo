import { Alert, Share, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styled";

interface ResultImcProps {
  messageResultImc: string;
  resultImc: string;
}

export default function ResultImc({ messageResultImc, resultImc }: ResultImcProps) {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Meu imc hoje é: ${resultImc}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View style={styles.resultImc}>
      <View style={styles.containerTextResultImgValueImc}>
        <Text style={styles.textResultImc}>{messageResultImc}</Text>
        <Text style={styles.information}>{resultImc}</Text>
      </View>
      <TouchableOpacity onPress={onShare} style={styles.buttonShare}>
        <Text style={styles.textShare}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
