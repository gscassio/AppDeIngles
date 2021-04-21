/*
!!!Esse cara no momento e apenas um teste!!!
*/
import React from 'react';
import {StyleSheet, View, Text,Button, SegmentedControlIOSBase, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Facil({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Aba facil</Text>
     
      <Button
        title="Objeto"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Animais"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Alimentos"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Números "
        onPress={()=>navigation.navigate('')}
      />
    </View>
  );
}

function Medio({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Aba média</Text>     
      <Button
        title="Do you want something to eat"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Now or Later"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Where are you?"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="I’m hungry"
        onPress={()=>navigation.navigate('')}
      />
    </View>
  );
}

function Dificil ({navigation}){
  return(
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
      <Text>Aba Dificil</Text>     
      <Button
        title="Sara went Shopping"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Man injured at Fast Food place"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Jerry decided to buy a gun"
        onPress={()=>navigation.navigate('')}
      />
      <Button
        title="Eat your Vegetables"
        onPress={()=>navigation.navigate('')}
      />
    </View>
  );
}

export default function(){
  
  const Guia=createBottomTabNavigator();
 
  return (
  
      <NavigationContainer initialRouteName="Fácil">
        <Guia.Navigator>

          <Guia.Screen
            name="Facil"
            component={Facil}
            options={{title:'Facil',
            headerStyle:{
              backgroundColor:'#008'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
                fontWeight:'bold'
              }
          }}
          />
        
          <Guia.Screen
            name="Medio"
            component={Medio}
            options={{title:'Medio',
            headerStyle:{
              backgroundColor:'#008',
            
              
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
          }}
          />

          <Guia.Screen
            name="Dificil"
            component={Dificil }
            options={{title:'Dificil',
            headerStyle:{
              backgroundColor:'#008'
            },
            headerTintColor:'#fff',
            headerTitleStyle:{
              fontWeight:'bold'
            }
            }}
          />

        </Guia.Navigator>
      </NavigationContainer>
    
  );
};
