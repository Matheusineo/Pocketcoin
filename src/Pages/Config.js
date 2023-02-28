import React from 'react';
import { StyleSheet,Text, View, Image, SafeAreaView, ScrollView, TextInput,TouchableOpacity} from "react-native";
import { StatusBar } from 'expo-status-bar';
import Header from '../components/HeaderConfig';


export default function Config() {


function AlertaSaiba(){

  alert('Oxi,pq apertou isso aqui fiote?');
}



  return(
<View  style={styles.container}>
  <Header/>

  <TouchableOpacity style={styles.ButtonSaiba} onPress={AlertaSaiba}>
  <Text style={styles.escrita}>Saiba mais</Text>
  </TouchableOpacity>

  <TouchableOpacity style={styles.ButtonSaiba}>
        <Image 
        source={require('../../images/googleicon.png')}
        style={styles.imagemgoogle}
        />
        <View style={styles.buttonIconSeparatorStyle}/>
        <Text style={styles.escrita}>Logar com a conta Google</Text>
      </TouchableOpacity>


  
</View>
  );
}

const styles = StyleSheet.create ({
  container: {
flex: 1,
backgroundColor: '#d3d3d3',
  },
  ButtonSaiba: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    margin: 5,
    backgroundColor: '#fff',
    borderColor:'#fff',
  },
  escrita: {
    fontSize: 18,
        color: '#000',
        fontWeight: 'bold'
  },
  buttonIconSeparatorStyle:{
    backgroundColor: '#fff',
    width: 1,
    height: 40,
    },
    imagemgoogle:{
      padding: 10, 
      margin: 5, 
      height: 25, 
      width: 25, 
      resizeMode: 'stretch', 
    }
})
