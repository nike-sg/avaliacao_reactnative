import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import LoginPage from '../pages/Login';
import SignupPage from '../pages/Signup';
import ProductsPage from '../pages/Products';

const Stack = createStackNavigator();

export default function Routes() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginPage} options={{headerShown: false}}/>
                <Stack.Screen name="Cadastrar" component={SignupPage} />
                <Stack.Screen name="Produtos" component={ProductsPage} options={{gestureEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
