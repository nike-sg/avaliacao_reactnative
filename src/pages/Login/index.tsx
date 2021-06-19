import React, { useRef } from 'react';
import { Text, View, TextInput, Image, KeyboardAvoidingView} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';


export default function LoginPage() {

  const navigation = useNavigation();
  const passwordRef = useRef();
  
  function goSignup() {
    navigation.navigate('Cadastrar');
  }

  return (
    <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <>
        <Text style={styles.title}>Login</Text>

        <TextInput 
        style={styles.input} 
        placeholder="Email"
        keyboardType='email-address'
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true}
        ref={passwordRef}
        />

        <Button onPress={()=>{}} style={styles.btn}>
          <Text style={styles.btnText}>Acessar</Text>
        </Button>
      </>
      <Button onPress={goSignup} >
          <Text style={styles.btnMuted}>Você não tem cadastro?</Text>
        </Button>
    </KeyboardAvoidingView>
  );
}