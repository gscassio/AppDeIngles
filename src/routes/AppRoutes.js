import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Vocabulario from '../componentes/Vocabulario';
import Dialogo from '../componentes/Dialogo';
import Perfil from '../componentes/Perfil';
import Historias from '../componentes/Historias';
import TextSelected from '../componentes/Historias/TextSelected';
import VocabularySelected from '../componentes/Vocabulario/VocabularySelected';
import Questions from '../componentes/Historias/Questions';
import Dialogues1 from '../componentes/Dialogo/Dialogues1';
import Dialogues2 from '../componentes/Dialogo/Dialogues2';
import Dialogues3 from '../componentes/Dialogo/Dialogues3';
import Dialogues4 from '../componentes/Dialogo/Dialogues4';


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
 },
 Perfil:{
   name: 'user'
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
      <Abas.Screen name="Perfil" component={Perfil} />
      </Abas.Navigator>
  );
}

export default function AppRoutes(){
  return(
      <Stack.Navigator>
        <Stack.Screen name="Vocabulario" component={Tabs} options={{ headerShown: false }} />
        <Stack.Screen name="TextSelected" component={TextSelected} options={{title:'Short English stories' }} />
        <Stack.Screen name="VocabularySelected" component={VocabularySelected} options={{title:'Vocabulary' }} />
        <Stack.Screen name="Questions" component={Questions} options={{title:'Short English stories'}} />
        <Stack.Screen name="Dialogues1" component={Dialogues1} options={{title:'Dialogues'}} />
        <Stack.Screen name="Dialogues2" component={Dialogues2} options={{title:'Dialogues'}} /> 
        <Stack.Screen name="Dialogues3" component={Dialogues3} options={{title:'Dialogues'}} />
        <Stack.Screen name="Dialogues4" component={Dialogues4} options={{title:'Dialogues'}} /> 
      </Stack.Navigator>
  );
}

