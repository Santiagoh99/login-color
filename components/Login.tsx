import React from 'react';
import { View,Text } from 'react-native';
import { stylesLogin } from "./styles";
import GoogleLogin from './authentication/Google';
import AppleLogin from './authentication/Apple';
import MagicLinkLogin from './authentication/Magic';

const LoginScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={stylesLogin.container}>
      <Text style={stylesLogin.title}>Iniciar sesión</Text>

      {/* Botón para iniciar sesión con Google */}
      <GoogleLogin navigation={navigation}/>

      {/* Botón para iniciar sesión con Apple 
      <AppleLogin />*/}

      {/* Formulario para iniciar sesión con Magic Link 
      <MagicLinkLogin />*/}
    </View>
  );
};

export default LoginScreen;
