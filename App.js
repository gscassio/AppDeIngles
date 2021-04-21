import React from 'react';
import {View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Abas=createBottomTabNavigator();

function Facil(){
  return(
    <View>
      <Text> Tela 1 </Text>
    </View>
  );
}
function Medio(){
  return(
    <View>
      <Text> Tela 2 </Text>
    </View>
  );
}
function Dificil(){
  return(
    <View>
      <Text> Tela 3 </Text>
    </View>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name="Tela1" component={Facil} />
        <Abas.Screen name="Tela2" component={Medio} />
        <Abas.Screen name="Tela3" component={Dificil} />
      </Abas.Navigator>
    </NavigationContainer>
  );
}