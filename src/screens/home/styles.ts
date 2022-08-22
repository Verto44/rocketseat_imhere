import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 24,
  },
  eventName: {
    marginTop: 48,
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFCFE",
  },
  eventDate: {
    fontSize: 16,
    color: "#6B6B6B",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    marginRight: 16,
    padding: 16,
    fontSize: 16,
    color: "#FFF",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
  },
  button: {
    height: 56,
    width: 56,
    backgroundColor: "#31CF67",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: 32,
    marginBottom: 42,
    flexDirection: "row",
  },
  emptyList: {
    color: "#FFF",
    textAlign: "center",
    fontSize: 16,
  },
  emptyListContentStyle: {
    flexGrow: 1,
    justifyContent: "center",
  },
});
