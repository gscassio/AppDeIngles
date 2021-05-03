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

  const Sarah = '../../images/ImgDialogo/pessoas/woman4.png'
  const Thomas = '../../images/ImgDialogo/pessoas/man4.png'
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
        <Text style={TextEstilos.tituloTalk}>estou com fome.</Text>
        <Text></Text> 
     
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Thomas: oi Sarah, como vai você?</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Sarah)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Bem, como você vai indo?</Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Thomas: ok</Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Sarah)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: O que você quer  fazer?</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>Thomas: Eu estou com fome. Eu gostaria de comer alguma coisa.</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Sarah)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Onde você quer ir?</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Thomas: Eu gostaria de ir a um restaurante italiano.</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Sarah)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Que tipo de comida italiana você gosta?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Thomas: Eu gosto de espaguete. Voce gosta de espaguete?</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Sarah)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Não, mas eu gosto de pizza</Text>
        </View> 

       
        </View>

        :

        <View >
        <Text style={TextEstilos.tituloTalk}>I’m hungry </Text>
        <Text></Text> 
     
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.imgOposta} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Thomas: Hi Sarah,how are you?</Text>            
        </View> 
        <Image style={TextEstilos.img} source={require(Sarah)}/> 
        <View style={TextEstilos.TextoDireita}>         
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Fine, how are you doing?</Text>     
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/>  
        </View>  

        <View style={TextEstilos.TextoEsquerda}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Thomas: Ok</Text>  
        </View>
        <Image style={TextEstilos.img} source={require(Sarah)}/>  
        <View style={TextEstilos.TextoDireita}>
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: What do you want to do?</Text>  
        </View>

        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/>
        </View>

        <View style={TextEstilos.TextoEsquerda}> 
          <Text  style={TextEstilos.TextoEsqConteudo}>Thomas: I’m hungry. I’d like to eat something.</Text> 
        </View>  
        <Image style={TextEstilos.img} source={require(Sarah)}/>   
        <View style={TextEstilos.TextoDireita}> 
          <Text style={TextEstilos.TextoEsqConteudo}>Sarah: Where do you want to go?</Text> 
        </View>   
        <View style={TextEstilos.ViewOposta}>
          <Image style={TextEstilos.img} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Thomas: I’d like to go to na Italian restaurant.</Text>   
        </View> 
        <Image style={TextEstilos.img} source={require(Sarah)}/> 
        <View style={TextEstilos.TextoDireita}> 
        <Text style={TextEstilos.TextoEsqConteudo}>Sarah: What kind of Italian food do you like?</Text>
        </View> 

        <View style={TextEstilos.ViewOposta}>
        <Image style={TextEstilos.img} source={require(Thomas)}/> 
        </View>

        <View style={TextEstilos.TextoEsquerda}>              
        <Text style={TextEstilos.TextoEsqConteudo}>Thomas: I like spaghetti. Do you like spaghetti.</Text>
        </View>  
        <Image style={TextEstilos.img} source={require(Sarah)}/>
        <View style={TextEstilos.TextoDireita}>           
        <Text style={TextEstilos.TextoEsqConteudo}>Sarah: No, I don’t, but I like pizza.</Text>
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