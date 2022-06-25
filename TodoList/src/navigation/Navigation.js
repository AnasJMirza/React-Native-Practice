import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/homeScreen/HomeScreen';
import SplashScreen from '../screens/splashScreen/SplashScreen';

const Navigation = () => {

  const Stack = createNativeStackNavigator();


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation