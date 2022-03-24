import logoheader from '../../assets/images/logo-header.svg'
import './styles.scss'
import { Link } from 'react-router-dom'
import { ButtonHeader } from '../button'
import { LoginScreen } from '../loginscreen'
import { useState } from 'react'
import { SignUp } from '../signup'
import cogoToast from 'cogo-toast';


export function HeaderPages() {

  function openClose() {
    setHandleLogin(true);
    setHandleSignUp(false)
  }

  function closeOpen() {
    setHandleLogin(false);
    setHandleSignUp(true);
  }

  function alertUser() {
    cogoToast.warn('Você não está logado. Faça login!')
    .then(() => setHandleLogin(true))
  }

  function infoDownload() {
    cogoToast.error('Download ainda não disponível!')
  }
  
  const [handleLogin, setHandleLogin] = useState(false); 
  const [handleSignUp, setHandleSignUp] = useState(false); 

  return (
    <div> 
      <div className="list-header">
        <ul>
          <img src={logoheader} alt="Logo da Página" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" onClick={alertUser}>Conta</Link>
          </li>
          <li>
            <Link to="/info">Informações</Link>
          </li>
          <li>
            <Link to="/donate">Donate</Link>
          </li>
          <li>
            <a onClick={infoDownload} className="download-button">Download</a>
          </li>
          <span className="text-breve">Em breve!</span>
        </ul>
        <div className="buttons">
          <ButtonHeader onClick={closeOpen}>Cadastre-se</ButtonHeader>
          <ButtonHeader onClick={openClose}>Login</ButtonHeader>
        </div>
      </div>
      {handleLogin && 
    (
      <div className="login-screen-close">
      <div className="login-screen">
         <a className="close-button" onClick={() => {setHandleLogin(false)}}>X</a>
        <LoginScreen />       
      </div>
      </div>

    )}
      {handleSignUp && 
    (
      <div className="login-screen-close">
      <div className="login-screen">
         <a className="close-button" onClick={() => {setHandleSignUp(false)}}>X</a>
        <SignUp />       
      </div>
      </div>
    )}
    </div>

  )
}
