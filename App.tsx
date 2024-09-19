import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './components/Login';
import ColorsScreen from './components/Color';
import MagicWelcome from './components/welcome/InitMagic'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Color" component={ColorsScreen} />
        <Stack.Screen name="Welcome" component={MagicWelcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
