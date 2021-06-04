import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8F7FC',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo:{
        marginTop: -90,
        marginBottom:30,
        height: 110,
        width: 110,
    },
    input:{
        borderWidth: 2,
        borderColor: '#1ABAA2',
        height: 44,
        width: '90%',
        borderRadius: 7,
        marginBottom: 10,
    },
    btnEnviar:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor: '#3099E6',
        elevation: 4,
        borderRadius: 7,
        borderWidth: .7,
        marginTop: 8,
    },
    txtEnviar:{
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
    }
});