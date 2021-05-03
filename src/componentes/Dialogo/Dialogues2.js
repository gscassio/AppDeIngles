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

  const Elizabeth = '../../images/ImgDialogo/pessoas/woman2.png'
  const Chris = '../../images/ImgDialogo/pessoas/man2.png'
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
        <Text style={TextEstilos.tituloTalk}>Agora ou mais tarde?</Text>
        <Text></Text> 
     
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>  
        <View style={TextEstilos.TextoDireita}>                  
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Chris, onde você está indo?</Text>        
        </View> 

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Chris: Eu vou à loja.</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Elizabeth)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Mesmo? Eu preciso ir à loja também.</Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Chris: Você gostaria de vir comingo?</Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Sim, vamos juntos.</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>Chris: Você quer ir agora ou mais tarde?</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Agora.</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: O que?</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Elizabeth)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Agora seria melhor</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: Ok, vamos.</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Vamos andando?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: Não e muito longe. Vamos dirigir.</Text>
        </View> 
       
        </View>

        :
        
        <View >
        <Text style={TextEstilos.tituloTalk}>Now ou Later </Text>
        <Text></Text> 
     
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>  
        <View style={TextEstilos.TextoDireita}>                  
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Chris, where are you going?</Text>        
        </View> 

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Chris: I’m going to the store</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Elizabeth)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Really? I need to go to the store too. </Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Chris: Would you like to come with me?</Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Yeah, let’s go together.</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>Chris: Would you like to go now or later?</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Now.</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: What?</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Elizabeth)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Now would be better.</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: Ok, let’s go.</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Elizabeth)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Elizabeth: Should we walk?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Chris)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Chris: No, it’s too far. Let’s drive.</Text>
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