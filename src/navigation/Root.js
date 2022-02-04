import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import { NavigationContainer, } from '@react-navigation/native';
import Character from '../component/Character';


const Stack = createNativeStackNavigator();

function  RootNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Homse" component={BottomTab} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default  RootNavigator;