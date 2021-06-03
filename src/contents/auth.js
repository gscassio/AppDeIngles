import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const AuthContext = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [load, setLoading] = useState(true);
    const [authGoogle, setAuthGoogle] = useState(false);

    useEffect(() => {
        async function loadStorage(){
            const storageUser = await AsyncStorage.getItem('Auth_user');

            if(storageUser) {
                //converterndo para JSON
                setUser(JSON.parse(storageUser));
                setLoading(false);
                setAuthGoogle(true);
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
                    email: value.user.email
                };
                setUser(data);
                storageUser(data);
              
            }).catch((error) => {
                alert(error)
            });
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
                };
                setUser(data);
                storageUser(data);
            })
        })
        .catch((error) => {
                alert(error)
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
              // user cancelled the login flow
              alert('user cancelled the login flow')
              console.log(error)
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
              alert('operation (e.g. sign in) is in progress already')
              console.log(error)
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
              alert('operation (e.g. sign in) is in progress already')
              console.log(error)
            } else {
              // some other error happened
              alert('error geral')
              console.log(error)
              
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