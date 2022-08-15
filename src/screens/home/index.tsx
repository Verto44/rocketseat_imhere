import { Text, View} from "react-native";
import {styles} from './styles'

export function Home(){
  return(
    <View style={styles.container}>
    <Text style={styles.eventName}>Nome do Evento</Text>
    <Text style={styles.eventDate}>sexta-feira, 4 de novembro</Text>
    </View>
  )
}
