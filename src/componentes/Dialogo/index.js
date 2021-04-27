import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Styles from '../../styles';
import StyleDia from '../../styles/StyleDia'


export default function Vocabulario({navigation}) {
 return (
   <View style={Styles.container}>
     <View style={StyleDia.cabecalho}>
        <Text style={StyleDia.titulo} >Dialogues</Text> 
     </View>
     <View style={StyleDia.menu}>
      <TouchableOpacity style={StyleDia.botao} onPress={() =>
        navigation.navigate('talkSelect', {talk_id: 1})}>
         
        <Image 
          style={StyleDia.img}
          source={require('../../images/ImgVocabulario/comida.png')}
        />
        <Text style={StyleDia.textoBotao}>Do you want something to drink</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StyleDia.botao} onPress={() => 
        navigation.navigate('talkSelect', {talk_id: 2}) }>
        <Image 
          style={StyleDia.img}
          source={require('../../images/ImgVocabulario/clock.png')}
        />
        <Text style={StyleDia.textoBotao}>Now or Later</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StyleDia.botao} onPress={() => 
        navigation.navigate('talkSelect', {talk_id: 3}) }>
        <Image 
          style={StyleDia.img}
          source={require('../../images/ImgVocabulario/nature2.png')}
        />
        <Text style={StyleDia.textoBotao}>Where are you?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StyleDia.botao} onPress={() => 
        navigation.navigate('talkSelect', {talk_id: 4}) }>
        <Image 
          style={StyleDia.img}
          source={require('../../images/ImgVocabulario/ifood.png')}
        />
        <Text style={StyleDia.textoBotao}>I’m hungry</Text>
      </TouchableOpacity>
     </View>       
   </View>
  );
}