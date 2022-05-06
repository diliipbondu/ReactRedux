import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity,ScrollView,SafeAreaView } from 'react-native'

const TodoList = ({item,deleteHandler}) => {
  return (
      <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize:30}}>{item.title}</Text>
      <TouchableOpacity>
          <Text style={{fontSize:30,marginLeft:20}} onPress={()=>deleteHandler(item.id)}>X</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default TodoList

const styles = StyleSheet.create({
    container:{
        backgroundColor:'red',
        flexDirection:'row',
        padding:10,
        margin:10

    }
})