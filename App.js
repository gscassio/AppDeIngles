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
import Dialogues1 from './src/componentes/Dialogo/Dialogues1';
import Dialogues2 from './src/componentes/Dialogo/Dialogues2';
import Dialogues3 from './src/componentes/Dialogo/Dialogues3';
import Dialogues4 from './src/componentes/Dialogo/Dialogues4';


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
            return <FontAwesome name={name} color={color} size={27} />
          }
        }) }
        tabBarOptions={{
          style:{
            backgroundColor: '#E2E7F3',
            paddingBottom: 5
          },
          activeTintColor: '#1D87F8',
          inactiveTintColor: '#828AAF'
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
        <Stack.Screen name="TextSelected" component={TextSelected} options={{title:'Short English stories' }} />
        <Stack.Screen name="Questions" component={Questions} options={{title:'Short English stories'}} />
        <Stack.Screen name="Dialogues1" component={Dialogues1} />
        <Stack.Screen name="Dialogues2" component={Dialogues2} />
        <Stack.Screen name="Dialogues3" component={Dialogues3} />
        <Stack.Screen name="Dialogues4" component={Dialogues4} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

