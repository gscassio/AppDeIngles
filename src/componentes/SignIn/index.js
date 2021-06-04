import React, {useState, useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contents/auth';
import styles from './styles';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const {signIn, signInWithGoogle } = useContext(AuthContext);
    const [fieldEmail, setFieldEmail] = useState('');
    const [fieldSenha, setFieldSenha] = useState('');
  
  
    const navigation = useNavigation();  
  
    function handleSignIn(){
      if(validation(email, senha)) {
        signIn(email, senha);
      }
     
    }

    function handleSingInGoogle()
    {
      signInWithGoogle();
    }

    function validation(email, senha){
      let rgxEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g;
      setFieldEmail('')
      setFieldSenha('')

      if(email.trim().length < 1){
        setFieldEmail('O campo e-mail é obrigatório.')
        if(senha.trim().length < 1){
          setFieldSenha('O campo senha é obrigatório.')
          return;
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
      { fieldEmail.trim().length > 1 ? (<Text style={{fontSize:14, color:'#b30b0b'}}>{fieldEmail}</Text>) : null }    
      <TextInput
        style={styles.input}
        onChangeText={(texto) => setEmail(texto) }
        value={email}
        onEndEditing={(e) => {
          if(e.nativeEvent.text.trim().length > 0){
            setFieldEmail('')
          }
        }}
        placeholder="Email"
       
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
      <TouchableOpacity style={styles.btnAcesso} onPress={handleSignIn} >
          <Text style={styles.txtAcesso}>Acessar</Text>
      </TouchableOpacity>

     <TouchableOpacity style={styles.btnGoogle} onPress={handleSingInGoogle}>
        <Image
            style={styles.imgGoole}
            source={require('../../images/google.png')}
        />
        <Text style={styles.txtGoogle}>Acessar com google</Text>
      </TouchableOpacity>  
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly' ,width:'90%' }}>       
        <View>
          <TouchableOpacity 
            style={styles.btnLinks}
            onPress={()=> navigation.navigate('SignUp') }
            >
                <Text style={styles.txtLinks}>Criar conta</Text>
          </TouchableOpacity> 
        </View>
        <View>
          <TouchableOpacity 
              style={styles.btnLinks}
              onPress={()=> navigation.navigate('ForgotPassWord') }
              >
                  <Text style={styles.txtLinks}>Esqueci a senha</Text>
            </TouchableOpacity> 
        </View>         
     </View>   
   </View>
  );
}