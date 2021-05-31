import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Switch,
  Button,
  StyleSheet,
  Image
}
  from 'react-native'
import TextEstilos from '../../styles/StyleDia'

export default function talkSelect({ route, navigation }) {

  const [traduzir, setTraduzir] = useState(false)
  const toggerTraduzir = () => { setTraduzir(!traduzir) }

  const Susan = '../../images/ImgDialogo/pessoas/woman1.png'
  const David = '../../images/ImgDialogo/pessoas/man1.png'
  return (

    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end'
          }}>
            <Text>
              Traduzir {traduzir ? '' : ''}
            </Text>
          </View>
          <Switch
            trackColor={{ false: '#777', true: '#8bf' }}
            thumbColor={traduzir ? '#00f' : '#444'}
            value={traduzir}
            onValueChange={toggerTraduzir}
          />

          {traduzir ?

            <View >
              <Text style={TextEstilos.tituloTalk}>Você quer algo para beber?</Text>
              <Text></Text>

              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: David, você gostaria de algo para comer?</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.imgOposta} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Não, estou satisfeito.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Você quer algo para beber?</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Sim, eu gostaria de um café.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Lamento, eu não tenho café.</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Tudo bem, Eu quero um copo com água</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Um copo pequeno ou um grande?</Text>
              </View>
              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Pequeno por favor.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Aqui está</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Obrigado</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: De nada.</Text>
              </View>

            </View>

            :

            <View >
              <Text style={TextEstilos.tituloTalk}> Do you want something to drink?  </Text>
              <Text></Text>

              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan:David, would you like something to eat?</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.imgOposta} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David:No, I’m full.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Do you want something to drink?</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Yes, I’d like some coffee.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan:Sorry, I don’t have any coffee.</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: That’s OK. I’ll have a glass of water.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan:A small glass, or a big one?</Text>
              </View>
              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}>David: Small please.</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>Susan: Here you are.</Text>
              </View>

              <View style={TextEstilos.ViewOposta}>
                <Image style={TextEstilos.img} source={require(David)} />
              </View>

              <View style={TextEstilos.TextoEsquerda}>
                <Text style={TextEstilos.TextoEsqConteudo}> David:Thanks</Text>
              </View>
              <Image style={TextEstilos.img} source={require(Susan)} />
              <View style={TextEstilos.TextoDireita}>
                <Text style={TextEstilos.TextoEsqConteudo}>You’re welcome.</Text>
              </View>

            </View>


          }

          <Button
            title="Voltar"
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>


  );
}