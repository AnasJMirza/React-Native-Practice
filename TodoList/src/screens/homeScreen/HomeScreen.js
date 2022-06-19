import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'

const HomeScreen = () => {

    const navigation = useNavigation();

    const handleSplash = ()=> {
        navigation.navigate('Splash');
    }

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="To Splash" onPress={handleSplash}/>
    </View>
  )
}

export default HomeScreen