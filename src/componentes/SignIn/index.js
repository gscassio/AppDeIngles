import React, {useState, useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../contents/auth';
import styles from './styles';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { signIn } = useContext(AuthContext);
  
  
    const navigation = useNavigation();  
  
    function handleSignIn(){
      signIn(email, senha);
    }

 return (
   <View style={styles.container} >
       <Image
        style={styles.logo}
        source={require('../../images/logo.png')}
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
      <TouchableOpacity style={styles.btnAcesso}>
          <Text style={styles.txtAcesso}>Acessar</Text>
      </TouchableOpacity>

     <TouchableOpacity style={styles.btnGoogle}>
        <Image
            style={styles.imgGoole}
            source={require('../../images/google.png')}
        />
        <Text style={styles.txtGoogle}>Acessar com google</Text>
      </TouchableOpacity>  
      <View>
         <TouchableOpacity 
         style={styles.btnCriarConta}
         onPress={()=> navigation.navigate('SignUp') }
         >
            <Text style={styles.txtCriarConta}>Criar conta</Text>
         </TouchableOpacity>         
     </View>   
   </View>
  );
}