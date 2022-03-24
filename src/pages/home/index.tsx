import './styles.scss';
import logoHome from '../../assets/images/logo-home.png';
import gifHome2 from '../../assets/images/battleground2.gif';
import gifHome1 from '../../assets/images/battleground.gif';
import { HeaderPages } from "../../components/header";



export function RagnarokHype() {
  
  return (
    <>
      <HeaderPages />
      <div className="logo-home">
        <img src={logoHome} alt="Logo da Homepage" />
      </div>
      <span className="text-home">
          Venha se divertir nos nossos campos de aventura!!!
      </span>
      <div className="gif1">
        <img src={gifHome1} alt="Battleground" />
        <img src={gifHome2} alt="Battleground2" />        
      </div>
    </>
  )
}