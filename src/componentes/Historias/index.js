import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import StylesH from '../../styles/StylesH';


export default function Historias({navigation}) {
 return (
   <ScrollView showsVerticalScrollIndicator={false} >
     <View style={StylesH.cabecalho}>
        <Text style={StylesH.titulo} >Short English stories</Text> 
     </View>
     <View style={StylesH.menu}>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 1}) } >
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/sara.png')}
        />
        <Text style={StylesH.textoBotao}>Sara Went Shopping</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 2}) }>
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/fastfood.png')}
        />
        <Text style={StylesH.textoBotao}>Man Injured at Fast Food Place</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 3}) }>
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/cowboy.png')}
        />
        <Text style={StylesH.textoBotao}>Jerry Decided To Buy a Gun</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 4}) }>
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/vegetable.png')}
        />
        <Text style={StylesH.textoBotao}>Eat Your Vegetables</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 5}) }>
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/swimmig.png')}
        />
        <Text style={StylesH.textoBotao}>Popular Park Reopens</Text>
      </TouchableOpacity>
      <TouchableOpacity style={StylesH.botao} onPress={() => navigation.navigate('TextSelected', {historia_id: 6}) }>
        <Image 
          style={StylesH.img}
          source={require('../../images/ImgHistorias/gasoline.png')}
        />
        <Text style={StylesH.textoBotao}>Gasoline Prices Hit Record High</Text>
      </TouchableOpacity>
      </View>       
   </ScrollView>
  );
}