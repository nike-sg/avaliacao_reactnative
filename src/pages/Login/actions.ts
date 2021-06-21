import userRepository from "../../repositories/user.repository";
import { User } from "../../models/users";
import api from "../../services/api";

export async function login(email: string, userPassword:string) {

  let user = { login:email, password:userPassword };

  if (user.login === undefined || user.login.trim() === '') {
    throw 'Email é obrigatório!';
  }
  if (user.password === undefined || user.password.trim() === '') {
    throw 'Senha é obrigatória!';
  }

  // console.log('Iniciando envio para API');
  const params = JSON.stringify(user);
  // console.log("Enviando", params);
  await api.post('/user/login', params)
  .then((response) => {
    // console.log('response',response.data)
    let user = { email, userPassword, token:response.data} as User;
    userRepository.save(user);
  })
  .catch((error) => {
    const erro = `${error.response.data} [${error.response.status}]`;
    throw erro;
  });

  // Verificar se salvou local
  // var retorno = await userRepository.get();
  // console.log('Salvou local', retorno);
}