import React, { useEffect } from 'react';
import { Pressable, Text, Alert } from 'react-native';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { stylesGoogle } from "./styles";

const iosClientId = "139043375319-d6d8uu5f0tjoc8oques7795dreoqohbp.apps.googleusercontent.com"
const androidClientId = "139043375319-o9l2bkhv15qmmsibverahhtimd53b1s3.apps.googleusercontent.com"
const webClientId = "139043375319-4uu55gou4bhc6v73o2l46bfe450qi04l.apps.googleusercontent.com"

WebBrowser.maybeCompleteAuthSession();

export default function LoginGoogle({ navigation }: { navigation: any }) {
  const config = {
    iosClientId,
    androidClientId,
    webClientId
  }

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const handleToken = () => {
    if (response?.type === 'success') {
      const { code } = response.params;
      navigation.navigate('Color');
    } else if (response?.type === 'error') {
      Alert.alert('Login Error', 'error en inicio de sesión');
    }
  }

  useEffect(() => {
    handleToken();
  }, [response])


  return (
    <Pressable style={stylesGoogle.button} onPress={() => { promptAsync(); }} disabled={!request}>
      <Text style={stylesGoogle.buttonText}>Iniciar sesión con Google</Text>
    </Pressable>
  );
}
