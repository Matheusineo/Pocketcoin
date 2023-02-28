import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Coins from './src/Pages/Coins';
import Plusbutton from './src/components/Plusbutton';
import Home from  './src/Pages/Home';
import Config from './src/Pages/Config';

import { Feather, Entypo} from '@expo/vector-icons';

const Tab= createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
       screenOptions={{
            tabBarStyle:{
          backgroundColor: '#3c3c3c',
          borderTopColor: 'transparent'
            },
            activeTintColor: '#FFF',
            tabStyle:{
                paddingBottom: 5,
                paddingTop:5,
            },
        }}
        >
         <Tab.Screen 
         name="Home" 
         component={Home}
         options={{
            headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Entypo name="home" size={size} color={color}/>

            )
         }}
         />   

{/* <Tab.Screen 
name="Coins" 
component={Coins}
options={{
    //tabBarStyle: {display: 'none'},
    headerShown: false,
    tabBarLabel: '',
    tabBarIcon: ({size, color}) => (
        <Plusbutton size={size} color={color}/>
    )
}}
/> */}
<Tab.Screen 
         name="Config" 
         component={Config}
         options={{
            tabBarStyle: {display: 'none'},
            headerShown: false,
            tabBarIcon: ({size, color}) => (
                <Feather name="settings" size={size} color={color} />
            )
         }}
         />
        </Tab.Navigator>
    )
}
