import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vocabulario from './src/componentes/Vocabulario';
import Historias from './src/componentes/Historias';
import Dialogo from './src/componentes/Dialogo';

const Abas=createBottomTabNavigator();


export default function App(){
  return(
    <NavigationContainer>
      <Abas.Navigator>
        <Abas.Screen name="Vocabulario" component={Vocabulario} />
        <Abas.Screen name="Dialogos" component={Dialogo} />
        <Abas.Screen name="Historias" component={Historias} />
      </Abas.Navigator>
    </NavigationContainer>
  );
}