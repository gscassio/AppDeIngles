import React, {useState, useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contents/auth';

export default function SignUp() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');
  const [fieldSenha, setFieldSenha] = useState('');
  const [fieldNome, setFieldNome] = useState('');

  //pegando a função do contexto(provider)
  const { signup } = useContext(AuthContext);

  function handleSignUp(){
    if(validation(email, senha, nome)) {
      signup(email, senha, nome);
    }
    
  }


  function validation(email, senha, nome){
    let rgxEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g;
    setFieldEmail('')
    setFieldSenha('')
    setFieldNome('')

    if(nome.trim().length < 1){
      setFieldNome('O campo nome é obrigatório.')
      if(email.trim().length < 1){
        setFieldEmail('O campo e-mail é obrigatório.')
      }
      if(senha.trim().length < 1){
        setFieldSenha('O campo senha é obrigatório.')
      }
      return;
    }

    if(email.trim().length < 1){
      setFieldEmail('O campo e-mail é obrigatório.')
      if(senha.trim().length < 1){
        setFieldSenha('O campo senha é obrigatório.')
      }
      return;
    }else if(!email.match(rgxEmail)){
      setFieldEmail('Informe um e-mail válido.')
      if(senha.trim().length < 1){
        setFieldSenha('O campo senha é obrigatório.')
        return;
      }
      return;
    }

    if(senha.trim().length < 1){
      setFieldSenha('O campo senha é obrigatório.')
      return;
    }else if(senha.trim().length < 8){
      setFieldSenha('A senha deve possuir no minímo 8 caracteres.')
      return;
    }

    return true;

  }


 return (
  <View style={styles.container} >
  <Image
   style={styles.logo}
   source={require('../../images/logo.png')}
 />
 { fieldNome.trim().length > 1 ? (<Text style={{fontSize:14, color:'#b30b0b'}}>{fieldNome}</Text>) : null } 
 <TextInput
   style={styles.input}
   onChangeText={(texto) => setNome(texto) }
   value={nome}
   placeholder="Nome"
   onEndEditing={(e) => {
    if(e.nativeEvent.text.trim().length > 0){
      setFieldNome('')
    }
  }}
  
 />

  { fieldEmail.trim().length > 1 ? (<Text style={{fontSize:14, color:'#b30b0b'}}>{fieldEmail}</Text>) : null }  
 <TextInput
   style={styles.input}
   onChangeText={(texto) => setEmail(texto) }
   value={email}
   placeholder="Email"
   onEndEditing={(e) => {
    if(e.nativeEvent.text.trim().length > 0){
      setFieldEmail('')
    }
  }}
  
 />

   { fieldSenha.trim().length > 1 ? (<Text style={{fontSize:14, color:'#b30b0b'}}>{fieldSenha}</Text>) : null } 
  <TextInput
   style={styles.input}
   onChangeText={(texto) => setSenha(texto) }
   value={senha}
   placeholder="Senha"
   secureTextEntry={true} 
   onEndEditing={(e) => {
    if(e.nativeEvent.text.trim().length > 0){
      setFieldSenha('')
    }
  }}
  
 />
 <TouchableOpacity style={styles.btnCadastro} onPress={handleSignUp}>
     <Text style={styles.txtCadastro}>Cadastrar</Text>
 </TouchableOpacity>


</View>
  );
}