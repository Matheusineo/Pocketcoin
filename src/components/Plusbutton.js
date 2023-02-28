import React from "react";
import { View, Text, StyleSheet} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Plusbutton({size, color}){
    return(
        <View style={styles.container}>
         <AntDesign name='plus' color={color} size={size}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
width: 60,
height: 60,
borderRadius: 30,
backgroundColor:'rgba(255,255,255, 0.5)',
alignItems: 'center',
justifyContent: 'center',
marginBottom: 20,
    }
})