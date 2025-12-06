import { StyleSheet, Text,TouchableOpacity, View , StatusBar} from 'react-native'
import React, { useState } from 'react'


export default function App() {

   const [randomBgColor,setRandomBgColor]= useState('#000000') 

   const isWhitecolor = randomBgColor === '#FFFFFF'
   const buttoncolor = isWhitecolor ? '#000000' : '#FFFFFF'
   const txtcolor = isWhitecolor ? '#FFFFFF' : '#000000'

  const generateColor = () => {
  
  const hexaRange = '0123456789ABCDEF'
  let color = "#"
  
  for(let i =0;i<6;i++){
    color += hexaRange[Math.floor(Math.random() * 16)]
  }
   
  setRandomBgColor(color)
}

  return (
    <>
    <StatusBar backgroundColor={randomBgColor}></StatusBar>
    <View style={[styles.container,{backgroundColor : randomBgColor}]}>
    <TouchableOpacity onPress={generateColor}>
      <View style={[styles.actionBtn,{backgroundColor:buttoncolor}]}>
      <Text style={[styles.btnTxt,{color:txtcolor}]}>Press Me</Text>
      </View>
    </TouchableOpacity>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  actionBtn:{
    backgroundColor:'#f7f7f7ff',
    borderRadius:6,
    paddingHorizontal:12,
    paddingVertical:3
  },

  btnTxt:{
    fontWeight:'bold',
   
  }

})