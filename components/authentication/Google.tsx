import React from 'react';
import { Pressable,Text } from 'react-native';
import { useAuthRequest, DiscoveryDocument } from 'expo-auth-session';
import { makeRedirectUri } from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native'; 
import { stylesGoogle } from "./styles";

const discovery: DiscoveryDocument = {
  authorizationEndpoint: 'https://accounts.google.com/o/oauth2/auth',
  tokenEndpoint: 'https://oauth2.googleapis.com/token',
  revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
};

export default function LoginGoogle() {
  const navigation = useNavigation();
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: '139043375319-4uu55gou4bhc6v73o2l46bfe450qi04l.apps.googleusercontent.com', 
      redirectUri: makeRedirectUri({
        //useProxy: true,
      }),
      scopes: ['profile', 'email'],
    },
    discovery
  );

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      navigation.navigate('Color');
    }
  }, [response, navigation]);

  return (
    <Pressable style={stylesGoogle.button} onPress={() => {promptAsync();}} disabled={!request}>
       <Text style={stylesGoogle.buttonText}>Iniciar sesión con Google</Text>
    </Pressable>
  );
}
