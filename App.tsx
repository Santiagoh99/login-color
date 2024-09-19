import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './components/login';
import Colors from './components/color';
import MagicWelcome from './components/welcome/InitMagic'

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Color" component={Colors} />
        <Stack.Screen name="Welcome" component={MagicWelcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
