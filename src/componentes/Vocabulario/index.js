import React from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Styles from '../../styles';
import StyleN from '../../styles/StyleN';


export default function vocabulario({navigation}) {
 return (
   <View style={Styles.container}>
     <View style={ StyleN.cabecalho}>
        <Text style={ StyleN.titulo} >Vocabulary</Text> 
     </View>
     <View style={ StyleN.menu}>
      <TouchableOpacity style={ StyleN.botao} onPress={() => navigation.navigate('VocabularySelected', {vocabulario_id: 1}) } >
        <Image 
          style={ StyleN.img}
          source={require('../../images/ImgVocabulario/Animals.png')}
        />
        <Text style={ StyleN.textoBotao}>Animals</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ StyleN.botao} onPress={() => navigation.navigate('VocabularySelected', {vocabulario_id: 2}) }>
        <Image 
          style={ StyleN.img}
          source={require('../../images/ImgVocabulario/Number.png')}
        />
        <Text style={ StyleN.textoBotao}>Number</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ StyleN.botao} onPress={() => navigation.navigate('VocabularySelected', {vocabulario_id: 3}) }>
        <Image 
          style={ StyleN.img}
          source={require('../../images/ImgVocabulario/Foods.png')}
        />
        <Text style={ StyleN.textoBotao}>Foods</Text>
      </TouchableOpacity>
      <TouchableOpacity style={ StyleN.botao} onPress={() => navigation.navigate('VocabularySelected', {vocabulario_id: 4}) }>
        <Image 
          style={ StyleN.img}
          source={require('../../images/ImgVocabulario/Objects.png')}
        />
        <Text style={ StyleN.textoBotao}>Objects</Text>
      </TouchableOpacity>
     </View>       
   </View>
  );
}
