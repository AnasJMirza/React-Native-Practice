import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import styles from './HomeScreenStyle';
import React from 'react';

const HomeScreen = () => {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const [text, onChangeText] = React.useState("Useless Text");

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          style={styles.profilePicture}
          source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}}
        />

        <Text style={styles.profileText}>Welcome Anas 🔥</Text>
      </View>

      <View style={styles.todosSection}>
        <View style={styles.todosInformation}>
          <TextInput
            // style={styles.input}
            onChangeText={onChangeText}
            value={text}
          />
        </View>

        <View style={styles.actualTodosWrapper}>
          <FlatList
            data={DATA}
            renderItem={element => {
              return (
                <Text style={styles.actualTodos}>{element.item.title}</Text>
              );
            }}
            // keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
