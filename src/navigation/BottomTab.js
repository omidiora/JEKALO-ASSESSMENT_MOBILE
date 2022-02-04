import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native';

import Character from '../component/Character';
import Episode from '../component/Episode';

const Tab = createMaterialBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Character"
     
      barStyle={{backgroundColor: 'lightblue', borderRadius: 104}}>
      <Tab.Screen
        name="Episode"
        component={Episode}
        tabBarLabel={false}
        
      />
      <Tab.Screen name="Character" component={Character} />
    </Tab.Navigator>
  );
}

export default BottomTab;
