import gifInfo from '../../assets/images/battleground3.gif';
import './styles.scss';
import { HeaderPages } from "../../components/header";

export function PageInfo() {
  return (
    <>
      <HeaderPages />
      <div className="info-container">
        <div className="gif-info">
          <img src={gifInfo} alt="Imagem de Informações" />
          <p>Somos um servidor privado de Ragnarok Online
             pré-renewal com o intuito de trazer muita diversão para a comunidade!
             O lançamento do servidor está previsto para Abril, ainda
             sem data exata e durante esse período estamos trabalhando
              para trazer o melhor servidor até você.
            </p>
          </div> 
        </div>
      </>
    ) 
  }

