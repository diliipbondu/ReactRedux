import { StyleSheet, Text, View,TouchableOpacity,Alert,Image } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <View style={styles.header}>
       <Animatable.Image  animation='bounce' duration={1500} style={styles.image} resizeMode='cover' source={{uri:'https://talenthouse-res.cloudinary.com/image/upload/c_limit,fl_progressive,h_1280,w_1280/v1567252638/user-579805/profile/rz3fmizpoi1o5tvojmaj.jpg'}} />
      </View>

      <Animatable.View animation='bounceInUp' duration={1500} style={styles.footer}>
       <Text style={styles.text} >Stay Conected with everyone ! </Text>
       <Text style={styles.gray} >Let's Communicate with others </Text>
       <TouchableOpacity onPress={()=>navigation.navigate('Home')} style={{justifyContent:'space-around',alignItems:'flex-end',paddingVertical:30}}>
         <Text style={styles.button}>GET STARTED</Text>
       </TouchableOpacity>
      </Animatable.View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgb(17, 77, 72)'

  },
    footer:{
        flex:2,
        backgroundColor:'#fff',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingHorizontal:20,
        paddingVertical:20
      },
      header:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
      },
      image:{
          width:300,
          height:300,
        borderRadius:200
      },
      text:{
        fontWeight:'bold',
        fontSize:37
      },
      gray:{
           color:'gray',
           fontSize:15,
           paddingVertical:10
      },
      button:{
        backgroundColor:'rgb(17, 77, 72)',
        padding:18,
        borderRadius:30,
        width:180,
        color:'white',
         fontWeight:'bold',
         textAlign:'center'
      }
    
})