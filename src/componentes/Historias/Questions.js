import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Questions({ navigation }) {
 return (
   <View>
    <Text>Aqui ficara as perguntas </Text>
    <Button 
    title="Voltar"
    onPress={() => navigation.goBack() }
    />
   </View>
  );
}