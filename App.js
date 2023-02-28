import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Routes from './routes';
import Home from './src/Pages/Home';
import Coins from './src/Pages/Coins';
import Config from './src/Pages/Config';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Coins" component={Coins} />
      <Stack.Screen name="Config" component={Config} />
    </Stack.Navigator>
  );
}

export default function App() {
  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  )
 }
 
 