import React, {useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../contents/auth';
import styles from './styles';

export default function Perfil() {
  const {user, signOut} = useContext(AuthContext);
  
 return (
   <View style={styles.container}>
      <TouchableOpacity style={styles.btnLogout} onPress={() => {signOut()}}>
       <Image
        style={styles.logout}
        source={require('../../images/logout.png')}
        />         
       </TouchableOpacity>
       <View style={styles.conteudo}>
         <Text style={styles.txtNome}>{ user.nome }</Text>
       </View>       
   </View>
  );
}