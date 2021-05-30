import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import TrackPlayer from 'react-native-track-player';
import * as Palavras from './BaseVocabulario';


const Words = ({img, pronuncia, palavra, audio}) => (
  <View style={{flex: 1}}>
  <View style={styles.viewCampos}>
   <TouchableOpacity style={styles.btn} onPress={() => startAudio(audio)} >
       <Image
           style={styles.img}
           source= {img}
       />
   </TouchableOpacity>
   <Text style={styles.proununcia}>{ pronuncia  }</Text>
   <Text style={styles.word}>{ palavra }</Text>
   </View>
</View>
);



async function startAudio(audio){
  await TrackPlayer.setupPlayer();
  await TrackPlayer.add({
      url: audio,
  });

  // Start playing it
  await TrackPlayer.play();
}


export default function VocabularioSelected({ route }) {
  const [palavras, setPalavras] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  
    switch(route.params.vocabulario_id) {
      case 1:
        setPalavras(Palavras.animals)
        break;
      case 2:
        setPalavras(Palavras.numbers)
        break;
      case 3: 
        setPalavras(Palavras.foods)
        break;
      case 4:
        setPalavras(Palavras.objects)
        break;
    }
    setLoading(false)
  },[]);


 return (
   <View style={{flex: 1, marginBottom: 20}}>
      {
       loading ? (<View style={{ justifyContent:'center', marginTop:200 }}><ActivityIndicator color="#2AC19C" size={45}  /></View>) :
       (
        <FlatList 
        data={palavras}
        keyExtractor = {item => item.id}
        renderItem = { ({ item }) => <Words img={item.img} pronuncia={item.pronuncia}  palavra={item.palavra} audio={item.audio} />  }       
        /> 
       )
     }
   </View>
  );
}