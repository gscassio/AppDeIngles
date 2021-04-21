import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Vocabulario from './src/componentes/Vocabulario';
import Historias from './src/componentes/Historias';
import Dialogo from './src/componentes/Dialogo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Abas=createBottomTabNavigator();



export default function App(){
  return(
    <NavigationContainer>
      <Abas.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if(route.name === 'Vocabulario')    iconName = 'comment'
            else if (route.name === 'Dialogos')  iconName = 'comments'
            else if(route.name === 'Histórias') iconName = 'book';
            return <FontAwesome name={iconName} size={size} color={color} />;
          }
        }) }
        tabBarOptions={{
          style:{
            backgroundColor: '#121212'
          },
          activeTintColor: '#fff'
        }}
      >
        <Abas.Screen name="Vocabulario" component={Vocabulario} />
        <Abas.Screen name="Dialogos" component={Dialogo} />
        <Abas.Screen name="Histórias" component={Historias} />
      </Abas.Navigator>
    </NavigationContainer> 
  );
}