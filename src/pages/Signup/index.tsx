import React, { useRef } from 'react';
import { Text, TextInput, Image, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ScrollView, Alert} from 'react-native';
import { BorderlessButton as Button } from 'react-native-gesture-handler';
import styles from './styles';
import * as actions from './actions';
import { useNavigation } from '@react-navigation/native';

export default function SignupPage() {
  
  const navigation = useNavigation();

  const emailRef = useRef();
  const ageRef = useRef();
  const addressRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  const [ name, setName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ age, setAge ] = React.useState(0);
  const [ address, setAddress ] = React.useState('');
  const [ userPassword, setPassword ] = React.useState('');
  const [ confirmationPassword, setConfirmationPassword ] = React.useState('');

  async function handleSave() {
    actions.save(name, email, age, address, userPassword, confirmationPassword)
    .then(() => {
      Alert.alert('Cadastrado','Por favor se logue.');
      navigation.goBack();
    })
    .catch((error) => {
      Alert.alert('Dados inválidos!',error);
    });
  }


  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <KeyboardAvoidingView contentContainerStyle={styles.container} behavior="position" enabled>
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
      <>
        
        <Text style={styles.title}>Cadastro</Text>
        <TextInput 
        style={styles.input} 
        placeholder="Nome" 
        autoCapitalize='words'
        returnKeyType="next"
        onSubmitEditing={() => { emailRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setName}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Email" 
        keyboardType='email-address'
        autoCapitalize='none'
        autoCorrect={false}
        autoCompleteType='email'
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => { ageRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setEmail}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Idade" 
        keyboardType='number-pad'
        ref={ageRef}
        returnKeyType="next"
        onSubmitEditing={() => { addressRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setAge}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Endereço" 
        ref={addressRef}
        returnKeyType="next"
        onSubmitEditing={() => { passwordRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setAddress}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry={true} 
        ref={passwordRef}
        returnKeyType="next"
        onSubmitEditing={() => { passwordConfirmationRef.current.focus();}}
        blurOnSubmit={false}
        onChangeText={setPassword}
        />

        <TextInput 
        style={styles.input} 
        placeholder="Confirmar a Senha" 
        secureTextEntry={true} 
        ref={passwordConfirmationRef}
        onChangeText={setConfirmationPassword}
        />


        <Button onPress={handleSave} style={styles.btn}>
          <Text style={styles.btnText}>Cadastrar</Text>
        </Button>
      </>
      </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}