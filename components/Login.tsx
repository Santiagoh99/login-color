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
      <GoogleLogin navigation={navigation}/>
      <AppleLogin navigation={navigation}/>
      <MagicLinkLogin navigation={navigation}/>
    </View>
  );
};

export default LoginScreen;
