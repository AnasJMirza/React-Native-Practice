import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  TouchableNativeFeedback,
  Alert,
  Platform,
  StatusBar,
  Dimensions,
 } from 'react-native'
import React from 'react'

export default function App() {

  console.log(Dimensions.get('screen')); // to get the screen size

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

      <Button title="I Will Guess" color="orange" onPress={()=> Alert.alert("Question", "You touched me, right ?", [
        {text : "Yes", onPress: ()=> alert("U r a truthful person")},
        {text : "No", onPress: ()=> alert("U r a Liear")}
      ])}/>

    </SafeAreaView>

    
  )
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : 'dodgerblue',
    // paddingTop : Platform.OS === 'android' ? StatusBar.currentHeight : 0, ==> To check the height of the status bar to give padding from top
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