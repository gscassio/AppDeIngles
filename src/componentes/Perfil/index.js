import React, {useContext} from 'react';
import { View, Text, Image, TouchableOpacity, Button } from 'react-native';
import { AuthContext } from '../../contents/auth';
import styles from './styles';

export default function Perfil() {
  const {user, signOut, signOutGoogle, authGoogle} = useContext(AuthContext);
  
 return (
   <View style={styles.container}>
      <TouchableOpacity style={styles.btnLogout} onPress={() => authGoogle ? signOutGoogle() : signOut() }>
       <Image
        style={styles.logout}
        source={require('../../images/logout.png')}
        />         
       </TouchableOpacity>
       {
         authGoogle ? 
         (
           <View style={styles.conteudoGoogle}>
             <Image 
                style={styles.imgGoogle}
                source={{uri: user.user.photo }}
             />
             <Text style={styles.txtGoogle}>{user.user.givenName}</Text>
           </View>
         ) :
         (
          <View style={styles.conteudo}>
            <Text style={styles.txtNome}>{ user.nome.split(' ')[0] }</Text>
          </View> 
         )
       }    
   </View>
  );
}