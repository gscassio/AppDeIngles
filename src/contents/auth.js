import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [load, setLoading] = useState(true);
    const [photo, setPhoto] = useState(true);
    const [authGoogle, setAuthGoogle] = useState(false);

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                //converterndo para JSON
                setUser(JSON.parse(storageUser));
                setLoading(false);      
            }

            setLoading(false);
        }

        GoogleSignin.configure({
            webClientId: '669474853864-bfn4couikiufals96dsnj6thjnr40n6g.apps.googleusercontent.com' ,
            offlineAccess: true,
        });
        loadStorage();
    },[]);


    async function signup(email, senha, nome) {
        await auth().createUserWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            await database().ref('users').child(uid).set({
                pontos: 0,
                nome: nome,
            })
            .then( () => {
                let data = {
                    uid: uid,
                    nome: nome,
                    email: value.user.email,
                    photo: null,
                };
                setUser(data);
                storageUser(data);
              
            }).catch((error) => {
             alert('Erro ao salvar usuário no banco de dados')
            });
        }).catch((error) => {
            if(error.code == 'auth/email-already-in-use'){
                alert('Já existe um usuário cadastrado com este e-mail.')
            }
        })
    }

    async function signIn(email, senha){
        await auth().signInWithEmailAndPassword(email, senha)
        .then( async (value) => {
            let uid = value.user.uid;
            await database().ref('users').child(uid).once('value')
            .then((snapshot) => {
                let data = {
                    uid: uid,
                    nome: snapshot.val().nome,
                    email: value.user.email,
                    photo: null,
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error) => {
                if(error.code == 'auth/user-not-found') {
                    alert('Não foi encontrado nenhum cadastro para o  e-mail informado.')
                }
                if(error.code == 'auth/wrong-password') {
                    alert('Senha incorreta.')
                }
        });

    }

    async function signInWithGoogle(){
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            setUser(userInfo);
            storageUser(userInfo)
            setAuthGoogle(true)

          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              alert('Operação cancelada pelo usuário')

            } else if (error.code === statusCodes.IN_PROGRESS) {
              alert('Já existe uma operação de login em progresso.')

            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              alert('Serviço não disponivel')

            } else {
              alert('Ocorreu um erro, tente mais tarde.')
            }
          }
    }

    async function signOutGoogle(){
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            await AsyncStorage.clear()
            .then( () => {
                setUser(null);
                setAuthGoogle(false)
                
            });
           
        } catch (error) {
           console.error(error); 
        }
    }

    async function storageUser(data){
        // JSON.stringify converte json para string
        await AsyncStorage.setItem('Auth_user', JSON.stringify(data));
    }

    async function signOut(){
        await auth().signOut();
        await AsyncStorage.clear()
        .then( () => {
            setUser(null);
        });

    }

    return(
        //!!user converter para boolean..caso tenha algum dado ficará com true, senao fica como false
        <AuthContext.Provider value={{ signed: !!user ,user, load, authGoogle, signup, signIn, signOut, signInWithGoogle, signOutGoogle }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;