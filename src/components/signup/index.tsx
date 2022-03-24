import { useState } from 'react';
import { ButtonHeader } from '../button';
import { Input } from '../input';
import { LoginScreen } from '../loginscreen';
import '../loginscreen/styles.scss';


export function SignUp() {

  const [ doLogin, setDoLogin] = useState(true);

  return (
    <>
    { doLogin ? (

    <div className="container-login">
        <div className="container-things">     
          <h2>Preencha seus dados pessoais :</h2>
        <div className="input-container">
          <Input type="text" placeholder="Usuário" />
          <Input type="email" placeholder="E-mail" />
          <Input type="text" placeholder="Data de Nascimento" />
          <Input type="password" placeholder="Senha" />
          <Input type="password" placeholder="Confirme sua senha" />
          <ButtonHeader>Enviar</ButtonHeader>
        </div>
        <p>
          Já tem uma conta? <a onClick={() => {setDoLogin(false)}}>Faça login</a>
        </p>
      </div>
    </div>
    ) :
    
    <LoginScreen />

    }
      
  </>
  )
}
