import React from 'react';
import { Pressable, Text, Alert } from 'react-native';
import * as AppleAuthentication from "expo-apple-authentication";
import { stylesApple } from "./styles";

export default function LoginApple({ navigation }: { navigation: any }) {
  const handleAppleLogin = async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ],
      });
      if (credential) {
        navigation.navigate('Color');
      }
      console.log({
        id: credential.identityToken,
        authorization_code: credential.authorizationCode,
      });
    } catch (err) {
      console.log(err)
      Alert.alert('Error', "Error no esperado");
    }
  };

  return (
    <Pressable style={stylesApple.button} onPress={handleAppleLogin}>
      <Text style={stylesApple.buttonText}>Iniciar sesión con Apple</Text>
    </Pressable>
  );
};
