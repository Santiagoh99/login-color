import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { stylesMagic } from "./styles";

const MagicLinkLogin = () => {
  const [email, setEmail] = useState('');

  const handleMagicLink = () => {
    // Implementar lógica para enviar Magic Link al email
    console.log(`Enviando Magic Link a ${email}`);
  };

  return (
    <View style={stylesMagic.container}>
      <TextInput
        style={stylesMagic.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Introduce tu correo"
        inputMode="email" // Uso de inputMode en lugar de keyboardType
      />
      <Pressable style={stylesMagic.button} onPress={handleMagicLink}>
        <Text style={stylesMagic.buttonText}>Enviar Magic Link</Text>
      </Pressable>
    </View>
  );
};

export default MagicLinkLogin;
