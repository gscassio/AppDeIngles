import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import firebase from '../../firebaseConnection';

export default function TextSelected({ route, navigation }) {

  //implementação apenas para teste
  const [nome, setNome] = useState('carregando...')
  useEffect(() => {
     async function getNome() {
       await firebase.database().ref('nome').on('value', (snapshot) =>{
         setNome(snapshot.val())
       });
     }

     getNome();
  },[]);

 return (
  <View>
    <Text style={{fontSize:18}} >Buscar historia de ID {route.params?.historia_id}</Text>
    <Text> {nome} </Text>
    <Button 
    title="Ir para a tela de perguntas"
    onPress={() => navigation.navigate('Questions')}
    />
  </View>
  );
}