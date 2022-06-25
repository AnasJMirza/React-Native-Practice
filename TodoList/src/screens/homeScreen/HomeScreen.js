import { View, Text, Button, ScrollView, Image } from 'react-native'
import styles from './HomeScreenStyle'
import React from 'react'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>

        <Image style={styles.profilePicture} source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png', }}/>

        <Text style={styles.profileText}>Welcome Anas 🔥</Text>

      </View>

      <View style={styles.todosSection}>
        <View style={styles.todosInformation}>
          <Text style={styles.todosHeading}>TODOS</Text>
        </View>

        <View style={styles.actualTodos}>
          
        </View>
      </View>
    </View>
  )
}

export default HomeScreen
