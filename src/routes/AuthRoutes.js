import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../componentes/SignIn';
import SignUp from '../componentes/SignUp';

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
        </AuthStack.Navigator>
    
    );
}

export default AuthRoutes;