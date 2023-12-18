import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import List from "./src/List";

export default function App() {
  const [tarefa, setTarefa] = useState("");
  const [list, setList] = useState([]);

  function handleAdd() {
    if (tarefa === "") {
      return;
    }
    const data = {
      key: Date.now(),
      item: tarefa,
    };
    setList((oldArrey) => [data, ...oldArrey]);
  }
  function handleDelet(item) {
    let filtro = list.filter((tarefa) => {
      return tarefa.item !== item;
    });
    setList(filtro);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.conteinerInput}>
        <TextInput
          style={styles.input}
          value={tarefa}
          onChangeText={(text) => setTarefa(text)}
          placeholder="Digite sua tarefa..."
        />
        <TouchableOpacity onPressOut={handleAdd} style={styles.buttonAdd}>
          <FontAwesome name="plus" size={20} color={"#fff"} />
        </TouchableOpacity>
      </View>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <List deleteItem={() => handleDelet(item.item)} data={item} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272e",
    paddingTop: 28,
  },
  title: {
    color: "#fff",
    textAlign: "center",
    marginTop: "5%",
    marginBottom: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  conteinerInput: {
    flexDirection: "row",
    width: "100%",
    height: 44,
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 22,
  },
  input: {
    backgroundColor: "white",
    height: 44,
    width: "75%",
    borderRadius: 50,
    paddingHorizontal: 15,
  },
  buttonAdd: {
    width: "15%",
    height: 44,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  list: {
    flex: 1,
    backgroundColor: "#fff",
    paddingStart: "4%",
    paddingEnd: "4%",
  },
});
