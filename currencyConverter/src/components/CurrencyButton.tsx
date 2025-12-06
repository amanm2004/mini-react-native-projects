import { StyleSheet, Text, View } from 'react-native'
import React, { JSX, PropsWithChildren } from 'react'

    type CurrencyButtonProp = PropsWithChildren<{
        name:string;
        flag:string;
    }>
  const CurrencyButton = (prop : CurrencyButtonProp):JSX.Element => {
    return (
        
        <View style={styles.btnContainer}> 
            <Text style={styles.country}>{prop.name} </Text>
            <Text style={styles.flag}>{prop.flag} </Text>
        </View>
        
    )
  }

const styles = StyleSheet.create({
    btnContainer:{
        alignItems:'center'
    },
    flag:{
        fontSize:24,
        color:'#ffffff',
        marginBottom:4
    },
    country:{
        fontSize:15,
        color:'#ffffff',
        marginBottom:4
    }
})

export default CurrencyButton