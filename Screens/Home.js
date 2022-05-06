import { StyleSheet, Text, View,TouchableOpacity,TextInput } from 'react-native'
import React from 'react'
import { AddProduct } from '../Redux/Action'
import { RemoveProduct } from '../Redux/Action'
import { useSelector,useDispatch } from 'react-redux'

const Home = () => {
  const data=useSelector(state=>state.counter)
  const dispatch=useDispatch()

  return (
    <View style={styles.conatiner}>
      <Text style={styles.text}>COUNTER :&nbsp; {data}</Text>
      
      <TouchableOpacity onPress={()=>dispatch(AddProduct())}>
        <Text style={styles.button}>ADD CONTER</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>dispatch(RemoveProduct())}>
        <Text style={styles.button}>REMOVE CONTER</Text>
      
      </TouchableOpacity>
      
    </View>
  )
}


export default Home

const styles = StyleSheet.create({
  conatiner:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    backgroundColor:'rgb(17, 77, 72)',
    padding:18,
    borderRadius:30,
    width:180,
    color:'white',
     fontWeight:'bold',
     textAlign:'center',
     marginTop:30
     
  },
  text:{
    borderWidth:1,
    backgroundColor:'red',
    borderRadius:10,
    fontSize:20,
    color:'white',
    padding:15,
    fontWeight:'bold'
  }
  
})