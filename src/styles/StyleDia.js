import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: '#2AC19C',
        fontWeight: 'bold',
        marginTop: 40,
        alignItems: 'center'
    },
    cabecalho: {
        alignItems: 'center'
    },
    menu:{
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center'        
    },
    textoBotao:{
        color: '#1D87F8',
        fontWeight: 'bold',
        fontSize: 15,
        paddingLeft: 10,
        marginTop: 15
    },
    botao:{
        backgroundColor: '#EDF2FE',
        height: 60,
        borderRadius: 15,
        justifyContent: 'flex-start',
        width: 300,
        borderColor:'#2AC19C',
        borderWidth: 1,
        elevation: 5,
        flexDirection: 'row',        
    },
    img: {
        height: 50,
        width: 50,
        marginTop: 5,
        marginLeft: 10,
    },

    TextoDireita:{
        flexWrap:"wrap", 

        backgroundColor: '#EDF2FE',
        height: 60,
        borderRadius: 15,
        justifyContent: 'flex-end',
        width: 300,
        borderColor:'#2AC19C',
        borderWidth: 1,
        elevation: 5,
        flexDirection: 'row',
       
    },
    TextoEsquerda:{
        flexWrap:"wrap",
        backgroundColor: '#EDF2FE',
        height: 60,
        borderRadius: 15,
        justifyContent: 'flex-start',
        width: 300,
        borderColor:'#2AC19C',
        borderWidth: 1,
        elevation: 5,
        flexDirection: 'row',
        
      
    },

});