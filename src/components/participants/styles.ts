import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: "#FFF",
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: "#E23C44",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
