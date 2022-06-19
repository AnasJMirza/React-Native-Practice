import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  TouchableNativeFeedback,
 } from 'react-native'
import React from 'react'

export default function App() {

  const handlePress = () => {
    alert("Text Clicked");
  }

  return (

    // React native practice
    
    <SafeAreaView style={styles.container}>

      <TouchableOpacity onPress={()=> alert("Image Touched")}>

      <Image 
        style={styles.image}
        source={{
          width: 200,
          height: 200,
          uri: "https://media-exp2.licdn.com/dms/image/C4D03AQFknxTOfWouqw/profile-displayphoto-shrink_200_200/0/1653245311482?e=1661385600&v=beta&t=ws2nWe2JW7tWDG7DHpGk4CcI8GhhSLM_zhwJInS-P2s",
        }}
       />

      </TouchableOpacity>


      <Text style={styles.text} onPress={handlePress}>
         Muhammad Anas Javed
      </Text>


      <TouchableNativeFeedback>
        <View style={{backgroundColor:'crimson', width : 120, height : 30}}></View>
      </TouchableNativeFeedback>

      <Butt

    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : 'dodgerblue',
    justifyContent : 'center',
    alignItems : 'center',
  },

  text : {
    fontSize : 17,
    color : 'white',
  },

  image : {
    borderRadius : 10,
  },
})