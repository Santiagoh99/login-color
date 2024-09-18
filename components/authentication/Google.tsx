import React from 'react';
import { Pressable, Text } from 'react-native';
import { stylesGoogle } from "./styles";

const GoogleLogin = () => {
  const handleGoogleLogin = () => {
    // Implementar la lógica para iniciar sesión con Google
    console.log('Iniciar sesión con Google');
  };

  return (
    <Pressable style={stylesGoogle.button} onPress={handleGoogleLogin}>
      <Text style={stylesGoogle.buttonText}>Iniciar sesión con Google</Text>
    </Pressable>
  );
};

export default GoogleLogin;
