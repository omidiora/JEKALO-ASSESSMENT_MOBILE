
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import RootNavigator from './src/navigation/Root';
import 'react-native-gesture-handler';

const App = () => {
  return (
    <>
      <RootNavigator />
    </>
  );
};


export default App;
