import userRepository from "../../repositories/user.repository";
import { User } from "../../models/users";
import api from "../../services/api";

export async function save(name: string, email:string , age:number, address:string, userPassword:string, confirmationPassword:string) {
  
  let user = { name, email, age, address, userPassword, confirmationPassword } as User;

  if (user.name === undefined || user.name.trim() === '') {
    throw 'Nome é obrigatório!';
  }
  if (user.email === undefined || user.email.trim() === '') {
    throw 'Email é obrigatório!';
  }
  if (user.age === undefined || user.age === 0 || user.age>110) {
    throw 'Idade Inválida!';
  }
  if (user.userPassword === undefined || user.userPassword.trim() === '') {
    throw 'Senha é obrigatória!';
  }
  if (user.confirmationPassword === undefined || user.confirmationPassword.trim() === '') {
    throw 'Confirmação da senha é obrigatória!';
  }
  if(user.userPassword !== user.confirmationPassword){
    throw 'Senhas Diferentes';
  }
  delete user.confirmationPassword;

  // console.log('Iniciando envio para API');
  const params = JSON.stringify(user);
  // console.log("Enviando", params);
  await api.post('/user/customer/add', params)
  .then((response) => {
    // console.log('response',response.data)
    // let user = { email, userPassword, token:response.data} as User;
    // userRepository.save(user);
  })
  .catch((error) => {
    const erro = `${error.response.data} [${error.response.status}]`;
    throw erro;
  });
  
}