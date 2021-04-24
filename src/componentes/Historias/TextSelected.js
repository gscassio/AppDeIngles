import React from 'react';
import { View, Text, Button } from 'react-native';

export default function TextSelected({ navigation }) {
 return (
  <View>
    <Text style={{fontSize:18}} >Aqui ficará o menu de Historias</Text>

    <Button 
    title="Ir para a tela de perguntas"
    onPress={() => navigation.navigate('Questions')}
    />
  </View>
  );
}