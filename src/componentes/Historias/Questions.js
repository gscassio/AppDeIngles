import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import styles ,{StylesH} from '../../styles/';
import RadioButtonRN from 'radio-buttons-react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Perguntas from './BasePerguntas';


const Exercicios = ({enunciado, alternativas}) => (
  <View>
    <View>
      <Text>{enunciado}</Text>
    </View>
    <RadioButtonRN 
      data={alternativas}
      selectedBtn={(e) => console.log(e)}
    />
  </View>
);


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
        renderItem = { ({ item }) => <Exercicios enunciado={item.enunciado} alternativas={item.alternativas} />  }
       
        /> 
       )
     }
   </View>
  );
}