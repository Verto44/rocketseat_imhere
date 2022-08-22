import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import { Participants } from "../../components/participants";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantsName, setParticipantsName] = useState("");

  function handleParticipantAdd() {
    if (participants.includes(participantsName.trim())) {
      return Alert.alert("Aviso", "Já exite um participante com esse nome");
    }

    setParticipants((prevState) => [...prevState, participantsName.trim()]);
    setParticipantsName("");
  }

  function handleParticipantRemove(name: String) {
    Alert.alert("Remover", `Deseja remover o participante ${name}`, [
      {
        text: "Sim",
        onPress: () =>
          setParticipants((prevState) =>
            prevState.filter((participant) => participant !== name)
          ),
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>
      <Text style={styles.eventDate}>sexta-feira, 4 de novembro</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
          onChangeText={setParticipantsName}
          value={participantsName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        contentContainerStyle={
          participants.length > 0 ? null : styles.emptyListContentStyle
        }
        renderItem={({ item }) => (
          <Participants
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyList}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista.
          </Text>
        )}
      />
    </View>
  );
}
