import React from 'react'
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity
} from 'react-native'; 

import { useNavigation } from '@react-navigation/native';


import { AntDesign } from '@expo/vector-icons';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function HeaderHome () {
    const navigation = useNavigation ()
    
    return(
        <View style={styles.container}>
            <View style={styles.content}>

            
            <TouchableOpacity style={styles.buttonBack} onPress={() => {navigation.navigate ('Home')}}>
            <AntDesign
            name="arrowleft" 
            size= {27} 
            color="white"/>
            </TouchableOpacity>

            <Text style={styles.NomeConfig}>Configurações</Text>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#3c3c3c',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 10,
    },
    content:{
        flex:1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
     buttonBack:{
        width:44,
        height:44,
        backgroundColor: 'rgba(255,255,255, 0.5)',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 44/2,
     },
     NomeConfig:{
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold',
        alignItems: 'flex-end'
     }
});



