import { faStar, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DarthVader from './img/darthvader.jpg'

function Main(){
    return(
        <div class="main">
            <h1>Personagens</h1>
            <div class="cards-main" id='cards-main'>
                
                <div class="card">
                    <div class="cima-card">
                        <button><FontAwesomeIcon icon={faStar}/></button>
                        <button><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                    <div class="meio-card">
                        <img src={DarthVader} />
                    </div>
                    <div class="baixo-card">
                        <h2>Darth Vader</h2>
                        <span>Vivo - Humano</span>
                        <button>Ver detalhes</button>
                    </div>
                </div>

                <div class="card">
                    <div class="cima-card">
                        <button><FontAwesomeIcon icon={faStar}/></button>
                        <button><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                    <div class="meio-card">
                        <img src={DarthVader} />
                    </div>
                    <div class="baixo-card">
                        <h2>Darth Vader</h2>
                        <span>Vivo - Humano</span>
                        <button>Ver detalhes</button>
                    </div>
                </div>

                <div class="card">
                    <div class="cima-card">
                        <button><FontAwesomeIcon icon={faStar}/></button>
                        <button><FontAwesomeIcon icon={faTrashCan}/></button>
                    </div>
                    <div class="meio-card">
                        <img src={DarthVader} />
                    </div>
                    <div class="baixo-card">
                        <h2>Darth Vader</h2>
                        <span>Vivo - Humano</span>
                        <button>Ver detalhes</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;