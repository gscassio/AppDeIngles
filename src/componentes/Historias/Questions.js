import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles  from '../../styles/';
import StylesH from '../../styles/StylesH';
import RadioButtonRN from 'radio-buttons-react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Perguntas from './BasePerguntas';
import Icon from 'react-native-vector-icons/FontAwesome';

const Exercicios = ({enunciado, alternativas, resposta}) => (
  <View style={StylesH.viewTituloQuestoes}>
    <View>
      <Text style={StylesH.textTituloQuestoes}>{enunciado}</Text>
    </View>
    <RadioButtonRN 
      style={StylesH.radioQuestoes}
      data={alternativas}
      animationTypes= {["zoomIn"]}
      icon={
        <Icon
          name="check-circle"
          size={25}
          color="#499CF4"
        />
      }
      selectedBtn={(e) => conferirResposta(e.label, resposta)}
    />
  </View>
);


 function conferirResposta(respEscolhida, respCorreta){

    if(respEscolhida == respCorreta) {
      alert('Correto!')
    } else {
      alert('Alternativa Incorreta')
    }
 }



export default function Questions({ route, navigation }) {
  const [perguntas, setPerguntas] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    switch(route.params.historia_id) {
      case 1:
        setPerguntas(Perguntas.SaraWentShopping)
        break;
      case 2:
        setPerguntas(Perguntas.ManInjuredatFastFoodPlace)
        break;
      case 3: 
        setPerguntas(Perguntas.JerryDecidedToBuyaGun)
        break;
      case 4:
        setPerguntas(Perguntas.EatYourVegetables)
        break;
    }
    setLoading(false)
  },[]);

 return (
   <View style={styles.container}>
     {
       loading ? (<View style={{ justifyContent:'center', marginTop:200 }}><ActivityIndicator color="#2AC19C" size={45}  /></View>) :
       (
        <FlatList 
        data={perguntas}
        keyExtractor = {item => item.id}
        renderItem = { ({ item }) => <Exercicios enunciado={item.enunciado} alternativas={item.alternativas} resposta={item.resposta} />  }
       
        /> 
       )
     }
   </View>
  );
}