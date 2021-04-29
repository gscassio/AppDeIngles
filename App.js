import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Vocabulario from './src/componentes/Vocabulario';
import Dialogo from './src/componentes/Dialogo';

//paginas
import Historias from './src/componentes/Historias';
import TextSelected from './src/componentes/Historias/TextSelected';
import Questions from './src/componentes/Historias/Questions';
import talkSelect from './src/componentes/Dialogo/talkSelect';

const Abas  = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
 Vocabulario: {
   name: 'comment'
 },
 Dialogo:{
   name: 'comments'
 },
 Historias:{
   name: 'book'
 }
};

function Tabs(){
  return(
      <Abas.Navigator
        screenOptions = {({route}) => ({
          tabBarIcon: ({color, size}) => {
            const { name } = icons[route.name];
            return <FontAwesome name={name} color={color} size={size} />
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
      <Abas.Screen name="Dialogo" component={Dialogo} />
      <Abas.Screen name="Historias" component={Historias} />
      </Abas.Navigator>
  );
}

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Vocabulario" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="TextSelected" component={TextSelected} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="talkSelect" component={talkSelect} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

