import React, { useRef } from 'react';
import { Text, TextInput, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import * as actions from './actions';

export default function LoginPage() {

  const navigation = useNavigation();
  const passwordRef = useRef();
  
  const [ email, setEmail ] = React.useState('');
  const [ userPassword, setPassword ] = React.useState('');

  function goSignup() {
    navigation.navigate('Cadastrar');
  }

  async function handleLogin(){
    actions.login(email, userPassword)
    .then(() => {
      navigation.navigate('Produtos');
    })
    .catch((error) => {
      Alert.alert('Erro',error);
    });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <>
        <Text style={styles.title}>Login</Text>

        <TextInput 
        style={styles.input} 
        placeholder="Email"
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true}
        ref={passwordRef}
        onChangeText={setPassword}
        />

        <Button onPress={handleLogin} style={styles.btn}>
          <Text style={styles.btnText}>Acessar</Text>
        </Button>
      </>
      <Button onPress={goSignup} >
          <Text style={styles.btnMuted}>Você não tem cadastro?</Text>
        </Button>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}