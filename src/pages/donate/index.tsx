import './styles.scss';
import { HeaderPages } from "../../components/header";
import { ButtonHeader } from '../../components/button';

export function PageDonate() {
  return (
    <>
      <HeaderPages />
        <div className="donate-container">
          <p>Faça sua doação e contribua com a estrutura e o bom funcionamento
            do servidor, clique abaixo em uma das opções para efetuar a doação: 
          </p>
          <div className="container-pagamentos">
            <form>
              <div className="form-pagamentos">
                <input type="radio" id="10" name="valor"/>
                <label htmlFor='10'>R$10<span className="text-creditos">= 100 Créditos</span></label>
                <input type="radio" id="20" name="valor"/>
                <label htmlFor='20'>R$20<span className="text-creditos">= 200 Créditos</span></label> 
                <input type="radio" id="30" name="valor"/>
                <label htmlFor='30'>R$30<span className="text-creditos">= 300 Créditos</span></label> 
              </div>
              <div className="button-send-donate">
              <ButtonHeader type="submit" isOutlined>
                Enviar Donate
              </ButtonHeader>
              </div>
            </form>
          </div>
            <p className="p-shadow">
              Lembre-se: jogar conosco é totalmente gratuito! Em troca, você
              receberá uma quantidade de créditos baseado no valor da doação
              para trocar por itens ou bonificações dentro do jogo.
            </p>
        </div>
    </>
  )
}