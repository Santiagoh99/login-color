import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Pressable } from 'react-native';
import { stylesMagic } from "./styles";
import { getAuth, sendSignInLinkToEmail,setPersistence} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function MagicLinkLogin({ navigation }: { navigation: any }) {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)

  setPersistence(auth, {
    type: 'LOCAL',
  }).catch((error) => {
    console.error('Error al establecer la persistencia:', error);
  });

  const sendMagicLink = async () => {
    const actionCodeSettings = {
      url: 'https://auth.expo.io/@santiagoh99/login-color',
      handleCodeInApp: true,
      iOS: {
        bundleId: 'com.santiago.loginColor'
      },
      android: {
        packageName: 'com.santiago.loginColor',
        installApp: true,
        minimumVersion: '12'
      },
      dynamicLinkDomain: 'https://auth.expo.io/@santiagoh99/login-color' 
    }

    setLoading(true);
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      await AsyncStorage.setItem('emailForSignIn', email);

      Alert.alert('Magic link enviado', 'Por favor, revisa tu correo para iniciar sesión.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Hubo un problema al enviar el enlace. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={stylesMagic.container}>
      <TextInput
        style={stylesMagic.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Ingrese correo"
        inputMode="email"
      />
      <Pressable style={stylesMagic.button} onPress={sendMagicLink}>
        <Text style={stylesMagic.buttonText}>Enviar Magic Link</Text>
      </Pressable>
    </View>
  );
};