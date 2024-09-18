import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesApple } from "./styles";

const AppleLogin = () => {
  const handleAppleLogin = () => {
    // Implementar la lógica para iniciar sesión con Apple
    console.log('Iniciar sesión con Apple');
  };

  return (
    <Pressable style={stylesApple.button} onPress={handleAppleLogin}>
      <Text style={stylesApple.buttonText}>Iniciar sesión con Apple</Text>
    </Pressable>
  );
};

export default AppleLogin;
