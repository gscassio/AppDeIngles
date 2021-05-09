import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from '../../styles';
import StylesH from '../../styles/StylesH';
import * as Historias from './BaseTextos';


const Paragrafo = ({ texto }) => (
  <Text>{texto}</Text>
);

export default function TextSelected({ route, navigation }) {
  const [historia, setHistoria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {   
      switch(route.params.historia_id) {
        case 1:
          setHistoria(Historias.SaraWentShopping)
          break;
        case 2:
          setHistoria(Historias.ManInjuredatFastFoodPlace)
          break;
        case 3: 
          setHistoria(Historias.JerryDecidedToBuyaGun)
          break;
        case 4:
          setHistoria(Historias.EatYourVegetables)
          break;
      }
    setLoading(false);

  },[]);

 return (
  <View style={Styles.container}>   
  {
    loading ? (<ActivityIndicator color="#2AC19C" size={45}  />) :
    (
      <ScrollView>
      <View style={StylesH.viewtxTitulo}>
        <Text style={StylesH.txtTitulo}>{historia?.titulo}</Text>
      </View>
      <View style={StylesH.viewConteudo}>
        <Text style={[StylesH.txtConteudo, {margin:5}]}>{historia?.conteudo}</Text>
      </View>  
      <View style={StylesH.viwBtn}>
        <TouchableOpacity style={StylesH.btnQuestions} onPress={() => navigation.navigate('Questions', {historia_id: route.params.historia_id})}>
          <Text style={StylesH.txtbtnQuestions}>Exercises</Text>
          <Image 
          style={[StylesH.imgBtnText]}
          source={require('../../images/ImgHistorias/test.png')}
        />
        </TouchableOpacity>
        </View>
    </ScrollView>  
    )
  }
  </View>
  );
}