import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TextSelected({ route, navigation }) {
 return (
  <View>
    <Text style={{fontSize:18}} >Buscar historia de ID {route.params?.historia_id}</Text>

    <Button 
    title="Ir para a tela de perguntas"
    onPress={() => navigation.navigate('Questions')}
    />
  </View>
  );
}