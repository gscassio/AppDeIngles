import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8F7FC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        marginTop: 5,
        marginBottom:25,
        height: 130,
        width: 130,
    },
    input:{
        borderWidth: 2,
        borderColor: '#1ABAA2',
        height: 44,
        width: '90%',
        borderRadius: 7,
        marginBottom: 10,
    },
    btnAcesso:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor: '#3099E6',
        elevation: 4,
        borderRadius: 7,
        borderWidth: .7,
        marginTop: 15,
       
    },
    txtAcesso:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',

    },
    btnLinks:{
        marginTop:5,
    },
    txtLinks:{
        fontWeight: 'bold',

    },
    btnGoogle:{
        width: '90%',
        borderColor: '#3099E6',
        borderWidth: 2,
        borderRadius: 7,
        flexDirection: 'row',       
        height: 44,
        elevation: 2,
        marginTop: 10,
        alignItems: 'center',
    },
    imgGoole:{
        height: 22,
        width: 22,
        paddingTop: 5,
        paddingBottom: 5,
        borderRadius: 4,
        marginLeft: '12%'

        
    },
    txtGoogle:{
        color: '#3099E6',
        fontWeight: 'bold',
        fontSize: 22,
        marginLeft: 10,

    }
});