import React, {useState} from 'react';
import {SafeAreaView,
        Text,
        ScrollView,
        View,
        Switch,
        Button,
        StyleSheet,
        Image} 
        from 'react-native'
import TextEstilos from '../../styles/StyleDia'

export default function talkSelect({ route, navigation }) {

  const [traduzir,setTraduzir]=useState(false)
  const toggerTraduzir =()=>{setTraduzir(!traduzir)}

  const Susan = '../../images/ImgDialogo/pessoas/woman1.png'
  const David = '../../images/ImgDialogo/pessoas/man1.png'
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

        {traduzir?

        <View >
        <Text >Você quer algo para beber?</Text>
        <Text></Text> 

        <View style={TextEstilos.TextoEsquerda}> 
          <Image style={TextEstilos.img} source={require(Susan)}/>        
          <Text>Susan: David, você gostaria de algo para comer?</Text>
        </View> 
        <View style={TextEstilos.TextoDireita}> 
          <Text >David: Não, estou satisfeito.</Text>
          <Image style={TextEstilos.img} source={require(David)}/>   
        </View> 
        <View style={TextEstilos.TextoEsquerda}>
        <Image style={TextEstilos.img} source={require(Susan)}/>  
        <Text>Susan: Você quer algo para beber?</Text>     
        </View>
        <View style={TextEstilos.TextoDireita}> 
        <Text>David: Sim, eu gostaria de um café.</Text>  
        <Image style={TextEstilos.img} source={require(David)}/>    
        </View>
        <View style={TextEstilos.TextoEsquerda}>
        <Text>Susan: Lamento, eu não tenho café.</Text>  
        <Image style={TextEstilos.img} source={require(Susan)}/>  
        </View>
        <View style={TextEstilos.TextoDireita}> 
        <Text>David: Tudo bem, Eu quero um copo com água</Text> 
        <Image style={TextEstilos.img} source={require(David)}/>   
        </View>    
        <View style={TextEstilos.TextoDireita}> 
        <Text>Susan: Um copo pequeno ou um grande?</Text> 
        <Image style={TextEstilos.img} source={require(Susan)}/> 
        </View>    
        <View style={TextEstilos.TextoEsquerda}>              
        <Text>David: Pequeno por favor.</Text>   
        <Image style={TextEstilos.img} source={require(David)}/> 
        </View>     
        <View style={TextEstilos.TextoDireita}> 
        <Text>Susan: Aqui está</Text>
        <Image style={TextEstilos.img} source={require(Susan)}/> 
        </View> 
        <View style={TextEstilos.TextoEsquerda}>              
        <Text>David: Obrigado</Text>
        <Image style={TextEstilos.img} source={require(David)}/> 
        </View>    
        <View style={TextEstilos.TextoDireita}>           
        <Text>Susan: De nada.</Text>
        <Image style={TextEstilos.img} source={require(Susan)}/>
        </View> 
       
        </View>

        :

        <View>
        <Text> Do you want something to drink?  </Text>
        <Text></Text>
        <Text> David, would you like something to eat?</Text>
        <Text> No, I’m full.</Text>
        <Text>Do you want something to drink?</Text>
        <Text>Yes, I’d like some coffee.</Text>        
        <Text>Sorry, I don’t have any coffee.</Text>        
        <Text>That’s OK. I’ll have a glass of water.</Text>        
        <Text>A small glass, or a big one?</Text>        
        <Text>Small please.</Text>        
        <Text>Here you are.</Text>
        <Text>Thanks</Text>
        <Text>You’re welcome</Text>
        </View>
        }

        <Button
          title ="Voltar"
          onPress={()=> navigation.goBack()}
        />
      </View>    
      </ScrollView>
    </SafeAreaView>


  );
}