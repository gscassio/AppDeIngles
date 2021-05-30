import React, {useState, useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contents/auth';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  //pegando a função do contexto(provider)
  const { signup } = useContext(AuthContext);

  function handleSignUp(){
    signup(email, senha, nome);
  }


 return (
  <View style={styles.container} >
  <Image
   style={styles.logo}
   source={require('../../images/logo.png')}
 />
 <TextInput
   style={styles.input}
   onChangeText={(texto) => setNome(texto) }
   value={nome}
   placeholder="Nome"
  
 />
 <TextInput
   style={styles.input}
   onChangeText={(texto) => setEmail(texto) }
   value={email}
   placeholder="Email"
  
 />
  <TextInput
   style={styles.input}
   onChangeText={(texto) => setSenha(texto) }
   value={senha}
   placeholder="Senha"
  
 />
 <TouchableOpacity style={styles.btnCadastro} onPress={handleSignUp}>
     <Text style={styles.txtCadastro}>Cadastrar</Text>
 </TouchableOpacity>


</View>
  );
}