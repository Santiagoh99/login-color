import React from 'react';
import { View, Text } from 'react-native';
import { stylesLogin } from "./styles";
import GoogleLogin from './authentication/google';
import AppleLogin from './authentication/apple';
import MagicLinkLogin from './authentication/magic';

export default function Login({ navigation }: { navigation: any }) {
  return (
    <View style={stylesLogin.container}>
      <Text style={stylesLogin.title}>Iniciar sesión</Text>
      <GoogleLogin navigation={navigation} />
      <AppleLogin navigation={navigation} />
      <MagicLinkLogin navigation={navigation} />
    </View>
  );
};