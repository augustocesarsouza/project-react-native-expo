import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  formContext: {
    flex: 1,
    bottom: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginTop: 30,
  },

  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 10,
  },

  formLabel: {
    color: "#000000",
    fontSize: 18,
    paddingLeft: 10
  },
  
  input: {
    width: "100%", // Faz os inputs ocuparem toda a largura
    height: 50, // Altura fixa para os inputs
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  buttonCalculator: {
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "red",
    padding: 10,
  },

  textButtonCalculator: {
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },

  errorMessage: {
    fontSize: 12,
    color: "red",
    fontWeight: "bold",
    paddingLeft: 10
  }
});
