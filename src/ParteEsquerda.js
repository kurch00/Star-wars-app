import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ParteEsquerda(){
    return(
        <div class="esquerda">
            <div class="esquerda-cima">
                <h1>PESQUISAR PERSONAGEM</h1>
                <form>
                    <input type="search" id="nome" name="nome" placeholder="Exemplo: Yoda..." required></input>
                    <button type="submit" class="btn-hover"><span>Inserir</span></button>
                </form>
            </div>

            <div class="esquerda-baixo">
            
            </div>
        </div>
    );  

}



export default ParteEsquerda