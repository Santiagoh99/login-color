import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import { getAuth, isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MagicWelcome() {
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const handleSignIn = async () => {
      const auth = getAuth();
      const url = window.location.href;

      if (isSignInWithEmailLink(auth, url)) {
        const email = await AsyncStorage.getItem('emailForSignIn');

        if (!email) {
          Alert.alert('Error', 'No se encontró un correo para completar la autenticación.');
          setLoading(false);
          return;
        }

        try {
          await signInWithEmailLink(auth, email, url);
          await AsyncStorage.removeItem('emailForSignIn');
          
          navigation.dispatch(
            CommonActions.reset({
              index: 1,
              routes: [{ name: 'Color' }],
            })
          );
        } catch (error) {
          console.error('Error al iniciar sesión:', error);
          Alert.alert('Error', 'No se pudo completar la autenticación.');
        } finally {
          setLoading(false);
        }
      }
    };

    handleSignIn();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loading ? <ActivityIndicator size="large" color="#0000ff" /> : <Text>Bienvenido</Text>}
    </View>
  );
};
