import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, { useState } from 'react';

export default function App() {

  const [name, setName] = useState("Anas")

  const todoGetter = (event)=>{
    setName(event.target.value)
  }

  return (
    <View>
      <Text style={styles.logo}>Todo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your tasks"
        onChange={(event) => todoGetter(event)}
      />
      <Text style={styles.logo}>{name}</Text>
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
