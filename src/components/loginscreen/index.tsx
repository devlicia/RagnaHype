import { useState } from 'react'
import { ButtonHeader } from '../button'
import { Input } from '../input'
import { SignUp } from '../signup'
import './styles.scss'

export function LoginScreen() {

  const [toCreateAccount, setToCreateAccount] = useState(true);

  return (
    <>
      { toCreateAccount ? (
        <div className="container-login">
        <div className="container-things">     
          <h2>Faça seu login</h2>
        <div className="input-container">
          <Input type="text" placeholder="Usuário" />
          <Input type="password" placeholder="Senha" />
          <ButtonHeader>Entrar</ButtonHeader>
        </div>
        <p>
          Ainda não tem uma conta? <a onClick={() => {setToCreateAccount(false)}}>Clique aqui</a>
        </p>
      </div>
    </div>
      ) :
    
      <SignUp />
    
    }
    </>
  )
}
