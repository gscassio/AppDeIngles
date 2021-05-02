import React from 'react';
import { View, Text, Button } from 'react-native';
import styles ,{StylesH} from '../../styles/';
import RadioButtonRN from 'radio-buttons-react-native';


const data = [
  {
    label: 'a mother of two',
    correta: false
   },
   {
    label: 'a wife',
    correta: false
    
   },
   {
    label: 'a single mother',
    correta: false
   },
   {
    label: 'a mother of two and a wife',
    correta: true
   },
  ];

function checarReposta(e){
  if(e.correta){
    alert('Resposa correta!!')
  }else {
    alert('Resposta incorreta..')
  }
}

export default function Questions({ navigation }) {
 return (
   <View style={styles.container}>
     <View style={{alignItems:'center'}}>
      <Text style={{fontSize:25, fontWeight:'bold', marginTop:10, color:'#1ABAA2'}}>Sara Smith is ....? (Teste)</Text>
     </View>
    <RadioButtonRN 
        style={{margin:8}}
        data={data}
        selectedBtn={(e) => checarReposta(e)}

      />

   </View>
  );
}