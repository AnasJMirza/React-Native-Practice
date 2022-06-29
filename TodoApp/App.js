import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {

  let todoValue = "";
  const todoGetter = (val) => {
    todoValue = val
  }

  const submitHandler = (todoValue) => {
    let newData = [...todos, {todo : todoValue}]
    setTodos(newData);
  }

  const [todos, setTodos] = useState([])


  return (
    <View>
      <Text style={styles.logo}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your tasks"
        onChangeText={val => todoGetter(val)}
      />
      <Button title="Submit" onPress={() => submitHandler(todoValue)} />
      <FlatList
        data={todos}
        renderItem={element => {
          return <Text style={styles.logo}>{element.item.todo}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 20,
    fontFamily: 'poppins',
  },

  input: {
    borderWidth: 1,
    padding: 0,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 20,
    fontFamily: 'poppins',
  },
});
