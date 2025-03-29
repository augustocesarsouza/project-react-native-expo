import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  resultImc: {
    marginTop: 20,
    paddingTop: 0,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center", // Centraliza o texto
    width: "100%",
    gap: 5
  },

  containerTextResultImgValueImc: {
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10,
    gap: 5
  },

  buttonShare: {
    backgroundColor: "#3457D5",
    borderRadius: 20,
    padding: 10,
    width: "20%",
    marginBottom: 20
  },

  textShare: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },

  textResultImc: {
    fontSize: 18,
    color: "black",
    fontWeight: "500",
  },

  information: {
    fontSize: 18,
    color: "green", 
    fontWeight: "bold",
  },
});
// flexDirection: "row",