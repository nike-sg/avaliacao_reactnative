import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';


const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
      
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastrar" component={SignupPage} />
            </Stack.Navigator>

        </NavigationContainer>
    );
}
