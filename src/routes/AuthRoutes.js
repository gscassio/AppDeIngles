import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../componentes/SignIn';
import SignUp from '../componentes/SignUp';
import ForgotPassWord from '../componentes/ForgotPassWord';

import { View, Text } from 'react-native';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown:false}} />
            <AuthStack.Screen 
            name="SignUp" 
            component={SignUp} 
            options={{
               headerTitle:'Cadastro'
            }} />
             <AuthStack.Screen 
            name="ForgotPassWord" 
            component={ForgotPassWord} 
            options={{
               headerTitle:'Recuperação de senha'
            }} />
        </AuthStack.Navigator>
        
    
    );
}

export default AuthRoutes;