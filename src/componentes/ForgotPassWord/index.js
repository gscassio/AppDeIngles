import React, {useState, useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import { AuthContext } from '../../contents/auth';

export default function ForgotPassWord() {
  const [email, setEmail] = useState('');
  const [fieldEmail, setFieldEmail] = useState('');

  const { passwordReset } = useContext(AuthContext);

  function handleSForgotPassWord(){
    if(validation(email)) {
      passwordReset(email);
      setEmail('');
    }
    
  }

  function validation(email){
    let rgxEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g;
    setFieldEmail('')

    if(email.trim().length < 1){
      setFieldEmail('O campo e-mail é obrigatório.')     
      return;
    }else if(!email.match(rgxEmail)){
      setFieldEmail('Informe um e-mail válido.')     
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
      <TouchableOpacity style={styles.btnEnviar} onPress={handleSForgotPassWord}>
        <Text style={styles.txtEnviar}>Enviar</Text>
      </TouchableOpacity>
  </View>
  );
}