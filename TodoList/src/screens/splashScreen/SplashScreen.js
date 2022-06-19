import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import React from 'react'

const SplashScreen = () => {

    const navigation = useNavigation();

    const handleHome = ()=> {
        navigation.navigate('Home')
    }


  return (
    <View>
      <Text>SplashScreen</Text>
      <Button title='To Home' onPress={handleHome} />
    </View>
  )
}

export default SplashScreen