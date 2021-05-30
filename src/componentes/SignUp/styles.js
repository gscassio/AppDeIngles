import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F8F7FC',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 90,
    },
    logo:{
        marginTop: 15,
        height: 80,
        width: 80,
        marginBottom: 20,
    },
    input:{
        borderWidth: 2,
        borderColor: '#1ABAA2',
        height: 44,
        width: '90%',
        borderRadius: 7,
        marginBottom: 10,
    },
    btnCadastro:{
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 44,
        backgroundColor: '#3099E6',
        elevation: 4,
        borderRadius: 7,
        borderWidth: .7,
        marginTop: 20,
    },
    txtCadastro:{
        fontSize: 22,
        color: '#fff',
        fontWeight: 'bold',
    }
});