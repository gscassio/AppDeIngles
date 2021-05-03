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

  const Lisa = '../../images/ImgDialogo/pessoas/woman3.png'
  const James = '../../images/ImgDialogo/pessoas/man3.png'
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
        <Text style={TextEstilos.tituloTalk}>De onde você é?</Text>
        <Text></Text> 
     
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>James: Olá</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Lisa)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Oi</Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>James: Como vai você?</Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Lisa)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Eu estou bem e você?</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>James: Bem. Você fala Ingles?</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Lisa)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Um pouco. Você e Americano?</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: Sim</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Lisa)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Lisa: De onde você é?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: Eu sou da Califórnia</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Lisa)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Muito prazer em conhece-lo.</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: Muito prazer em conhece-la também.</Text>
        </View> 
       
        </View>

        :
        <View >
        <Text style={TextEstilos.tituloTalk}>Where are you? </Text>
        <Text></Text> 
     
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>James: Hello.</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Lisa)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Hi. </Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>James: How are you? </Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Lisa)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: I’m good. How are you?</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>James: Good. Do you speak English?</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Lisa)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Lisa: A little. Are you American?</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: Yes.</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Lisa)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Where are you from?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: I’m from California.</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Lisa)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Lisa: Nice to meet you.</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(James)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>James: Nice to meet you too.</Text>
        </View> 
       
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