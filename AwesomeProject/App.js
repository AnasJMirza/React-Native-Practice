import React from 'react';
import {Text, ScrollView ,ActivityIndicator, Button, FlatList, Image, View} from 'react-native'
import { create } from 'react-test-renderer';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'index.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'style.css',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'index.js',
  },
];

const App = () => {


  const renderItem = ({ item }) => (
    <Text style={style.center}>{item.title}</Text>
  );



  return (
    <ScrollView style={style.body}>
      <ActivityIndicator size="large" color="white" />
      <Text style={style.center} size='large'>Hello ! Let's learn React-Native 🔥</Text>

      <Button
        onPress={()=> alert("O hello ? ")}
        title="Press Me"
      />

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


      <View>
        <Image
          style={{width: 50, height: 50,}}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      
    </ScrollView>
  );
};

export default App;



const style = {
  center : {
    textAlign : 'center',
    color : 'white'
  },

  body : {
    backgroundColor : 'crimson',
  }
}