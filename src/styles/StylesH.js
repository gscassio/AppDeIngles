import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    titulo: {
        fontSize: 30,
        color: '#2AC19C',
        fontWeight: 'bold',
        marginTop: 40,
        alignItems: 'center',
        marginBottom: 50,
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
        marginBottom: 50,
    },
    img: {
        height: 50,
        width: 50,
        marginTop: 5,
        marginLeft: 10,
    },
    txtConteudo:{
        fontSize: 22,
        paddingLeft: 7,
        paddingBottom: 7,
    },
    txtTitulo:{
        color: '#2AC19C',
        fontSize: 28,
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
    },
    viewtxTitulo:{
        alignItems: 'center',
        paddingBottom:5,
    },
    btnQuestions:{
        backgroundColor: '#47D099',
        width: 150,
        height: 50,
        borderRadius: 10,
        borderColor:'#2AC19C',
        borderWidth: 1,
        elevation: 7,
        flexDirection: 'row',
    },
    viwBtn:{
        flex: 1,
        alignItems: 'flex-end',
        padding:10,
    },
    txtbtnQuestions:{
        color: '#fff',
        fontSize: 22,
        marginTop: 10,
        marginLeft: 10,
        fontWeight: 'bold'
    },
    imgBtnText:{
        backgroundColor:'#fff',
        borderRadius:25,
        width: 25,
        height: 25,
        marginLeft: 10,
        marginTop:15,
    },
    viewTituloQuestoes: {
        paddingBottom: 35,
        paddingTop: 10
    },
    textTituloQuestoes: {
        fontSize: 20,
        paddingLeft:10,
        color: '#1ABAA2',
        fontWeight: 'bold',       
    },
    radioQuestoes: {
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10

    },


});