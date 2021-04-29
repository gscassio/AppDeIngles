import React, {useState} from 'react';
import {SafeAreaView,Text,ScrollView,View,Switch,Button} from 'react-native'


export default function talkSelect({ route, navigation }) {

  const [traduzir,setTraduzir]=useState(false)
  const toggerTraduzir =()=>{setTraduzir(!traduzir)}

  return(

    <SafeAreaView style={{flex:1}}>
      <ScrollView>
      <View>
        <View style={{    flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'}}>
        <Text>    
          Traduzir:{traduzir ?'Sim':'Nao'}
        </Text>
        </View>
        <Switch
          trackColor={{false:'#777',true:'#8bf'}}
          thumbColor={traduzir?'#00f':'#444'}
          value={traduzir}
          onValueChange={toggerTraduzir}           
        />
        <Text style={{fontSize:18}} >Conversa  ID {route.params?.talk_id}</Text>

        <Button
          title ="Voltar"
          onPress={()=> navigation.goBack()}
        />
      </View>    
      </ScrollView>
    </SafeAreaView>


  );
}