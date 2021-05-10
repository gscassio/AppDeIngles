import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, ActivityIndicator, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Styles from '../../styles';
import StylesH from '../../styles/StylesH';
import * as Historias from './BaseTextos';
import TrackPlayer from 'react-native-track-player';


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

   async function startAudio(){
      await TrackPlayer.setupPlayer();
      await TrackPlayer.add({
          url: historia.audio,
          artwork: historia.img,
          title: historia.titulo
      });
  
      // Start playing it
      await TrackPlayer.play();
  }

 return (
  <View style={Styles.container}>   
  {
    loading ? (<View style={{ justifyContent:'center', marginTop:200 }}><ActivityIndicator color="#2AC19C" size={45}  /></View>) :
    (

      <ScrollView>
        <View style={{flex:1, flexDirection:'row-reverse' ,alignItems:'flex-end', margin: 5}}>
        <TouchableOpacity onPress={() => TrackPlayer.stop()}>
            <Image 
              style={{width:42, height:42}}
              source={require('../../images/ImgHistorias/btn_stop.png')}
              
            />
          </TouchableOpacity>
          <TouchableOpacity  onPress={() => startAudio()}>
          <Image 
            style={{width:45, height:45}}
            source={require('../../images/ImgHistorias/btn_play.png')}
          />
          </TouchableOpacity> 
        </View>      
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