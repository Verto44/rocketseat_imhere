import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../participants/styles";

type Props = {
  name: String;
  onRemove: () => void;
};

export function Participants({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  );
}
