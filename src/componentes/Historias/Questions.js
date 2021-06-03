import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, Button, TouchableOpacity } from 'react-native';
import styles  from '../../styles/';
import StylesH from '../../styles/StylesH';
import RadioButtonRN from 'radio-buttons-react-native';
import { FlatList } from 'react-native-gesture-handler';
import * as Perguntas from './BasePerguntas';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';

const Exercicios = ({enunciado, alternativas, resposta}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [textoModal, setTextoModal] = useState('');
  const [iconeModal, setIconeModal] = useState('');
  const [colorModal, setColorModal] = useState('');

  function conferirResposta(respEscolhida, respCorreta){
    if(respEscolhida == respCorreta) {
      setTextoModal('Correct!!')
      setModalVisible(true);
      setIconeModal('check')
      setColorModal('#499CF4')
    } else {
      setTextoModal('Incorrect!!')
      setModalVisible(true);
      setIconeModal('times')
      setColorModal('#b30b0b')
    }
 }
  
  return (  
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
      <Modal 
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      backdropOpacity={0.15}
      animationOutTiming={2000}
      animationInTiming={700}
      animationIn="slideInDown"
      style={{justifyContent: 'center', alignItems: 'center'}}
      >
        <View style={{backgroundColor: '#F1F5F4', justifyContent: 'center', alignItems: 'center', marginTop: -150, margin:4, padding:8,
      width: 250, borderRadius: 35,
      }}>
          <Icon
            name={iconeModal}
            size={70}
            color={colorModal}
          />
          <Text style={{fontSize:25, fontStyle:'italic', fontWeight:'bold', color: colorModal, marginTop: -2, marginBottom:15 }}>{textoModal}</Text>

          <TouchableOpacity onPress={() => setModalVisible(false)} style={{backgroundColor:"#5C636A", height:45, width:90, borderRadius: 8, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:22, fontWeight: 'bold', color: '#fff'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  </View>
)};

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