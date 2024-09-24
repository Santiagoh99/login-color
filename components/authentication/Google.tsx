import React, { useEffect } from 'react';
import { Pressable, Text, Alert } from 'react-native';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import * as AuthSession from 'expo-auth-session';
import { stylesGoogle } from "./styles";

//id de autenticacion de google 
const iosClientId = "139043375319-d6d8uu5f0tjoc8oques7795dreoqohbp.apps.googleusercontent.com"
const androidClientId = "139043375319-o9l2bkhv15qmmsibverahhtimd53b1s3.apps.googleusercontent.com"
const webClientId = "139043375319-4uu55gou4bhc6v73o2l46bfe450qi04l.apps.googleusercontent.com"

WebBrowser.maybeCompleteAuthSession();

export default function LoginGoogle({ navigation }: { navigation: any }) {
  const config = {
    iosClientId,
    androidClientId,
    webClientId,
    redirectUri: AuthSession.makeRedirectUri({
      scheme: 'com.santiago.loginColor',
    }),
  }

  const [request, response, promptAsync] = Google.useAuthRequest(config);

  const handleToken = () => {
    try {
      if (response?.type === 'success') {
        const { authentication } = response;
        if (authentication?.accessToken) {
          console.log('Access Token:', authentication.accessToken);
          navigation.navigate('Color'); // Navega a la pantalla 'Color'
        } else {
          Alert.alert('Error', "No se pudo obtener el token de acceso.");
        }
      } else if (response?.type === 'dismiss') {
        navigation.navigate('Color');
      }
      console.log('data', response);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', "Error no esperado");
    }
  };

  useEffect(() => {
    handleToken();
  }, [response])


  return (
    <Pressable style={stylesGoogle.button} onPress={() => { promptAsync(); }} disabled={!request}>
      <Text style={stylesGoogle.buttonText}>Iniciar sesión con Google</Text>
    </Pressable>
  );
}
/*
Configuration: Build Credentials KMRwmmktFa (Default)
Keystore
Type                JKS
Key Alias           baaa6b165f3f5631288e30081ecbbab9
MD5 Fingerprint     93:23:B1:4F:BA:E9:A7:54:A2:E6:9D:75:E9:1C:0D:49
SHA1 Fingerprint    BB:FE:81:A7:B1:55:88:A1:79:79:4D:E1:70:97:57:18:8D:3F:5E:46
SHA256 Fingerprint  E2:62:83:C9:96:76:19:38:1E:27:33:25:BA:E4:19:68:FF:D6:FB:1A:F4:BB:3B:48:7B:E2:17:F8:C1:53:1B:B0
Updated             16 seconds ago

Configuration: Build Credentials FKLcmnqRg0
Keystore
Type                JKS
Key Alias           50896bb14ef36b5ec2c88d39caaf6420
MD5 Fingerprint     43:FE:97:70:53:4D:39:E3:AA:A2:36:E9:41:A5:A0:55
SHA1 Fingerprint    D5:4C:CB:68:FB:12:10:65:97:9E:82:E2:50:BB:BB:68:EF:02:1D:2D
SHA256 Fingerprint  47:7A:C3:0C:D5:FE:B4:55:84:E3:61:55:27:87:0B:0D:A0:F6:36:B8:27:38:DD:B5:56:A8:C3:75:D0:FE:F1:0B
*/