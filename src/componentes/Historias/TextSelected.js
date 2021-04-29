import React, {useState, useEffect} from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firebase from '../../firebaseConnection';
import Styles from '../../styles';
import StylesH from '../../styles/StylesH';

export default function TextSelected({ route, navigation }) {
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  //temporario
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     async function getNome() {
<<<<<<< HEAD
       await firebase.database().ref('nome').on('value', (snapshot) =>{
         setNome(snapshot.val())
=======
       await firebase.database().ref('historias').child(route.params.historia_id).once('value', (snapshot) =>{
         setTitulo(snapshot.val().titulo)
         setConteudo(snapshot.val().conteudo)
>>>>>>> e737a04ddd77aae8793f7614afcf472281ec7230
       });
       setLoading(false);
     }

    getNome();
  },[]);

 return (
  <View style={Styles.container}>   
  {
    loading ? (<ActivityIndicator color="#2AC19C" size={45}  />) :
    (
      <ScrollView>
      <View style={StylesH.viewtxTitulo}>
        <Text style={StylesH.txtTitulo}>{titulo}</Text>
      </View>
      <View style={StylesH.viewConteudo}>
        <Text style={StylesH.txtConteudo}>{conteudo}</Text>
      </View>  
      <View style={StylesH.viwBtn}>
        <TouchableOpacity style={StylesH.btnQuestions} onPress={() => navigation.navigate('Questions')}>
          <Text style={StylesH.txtbtnQuestions}>Comprehension</Text>
        </TouchableOpacity>
        </View>
    </ScrollView>  
    )
  }

  </View>
  );
}