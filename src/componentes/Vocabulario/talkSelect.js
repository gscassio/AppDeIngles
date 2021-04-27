import React from 'react';
import { View, Text, Button } from 'react-native';


export default function talkSelect({ route, navigation }) {
  return(
    <View>
      <Text style={{fontSize:18}} >Conversa  ID {route.params?.talk_id}</Text>

      <Button
        title ="Voltar"
        onPress={()=> navigation.goBack()}
      />
    </View>
  );
}