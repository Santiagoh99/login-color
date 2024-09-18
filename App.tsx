import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/Login';
import ColorsScreen from './components/Color';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        {/* Coloresss
        <Stack.Screen name="Colors" component={ColorsScreen} />*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
