import React from 'react';
import { View, Text, Button } from 'react-native';


export default function Historias({navigation}) {
 return (
   <View>
       <Text style={{fontSize:22, margin:10}}>Aqui ficará o menu dos Historias</Text>
       <Button 
        title="Acessar historia selecionada"
        onPress={() => navigation.navigate('TextSelected')}
       />
   </View>
  );
}