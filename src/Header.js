import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Perfil from './img/background.png'
import Sabre from './img/sabreluz.png'
import { faCoffee, faHouse, faStar, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
    return(
        <header>
            <div class="titulo-header">
                <span class="txt">STAR WARS</span>
            </div>
            <div class="menu">
                <ul class="">
                    <li>
                        <FontAwesomeIcon icon={faHouse}/>
                        <div class="sabre-luz">
                            <a href="#" class="menu-item-txt">Personagens</a>
                            <div class="sabre">
                                <img src={Sabre} />
                                <div class="plasma"></div>
                            </div>
                        </div>
                    </li>
                    
                    <li>
                        <FontAwesomeIcon icon={faUser}/>
                        <div class="sabre-luz">
                            <a href="#" class="menu-item-txt">Sobre Mim</a>
                            <div class="sabre">
                                <img src={Sabre} />
                                <div class="plasma"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faStar}/>
                        <div class="sabre-luz">
                            <a href="#" class="menu-item-txt">Favoritos (0)</a>
                            <div class="sabre">
                                <img src={Sabre} />
                                <div class="plasma"></div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a href="#" class="link-perfil"><img src={Perfil} alt="perfil" class="perfil" /></a>
                    </li>
                </ul>
                <ul>
                    
                    
                   
                </ul>
                
            </div>
        </header>
    );
}

export default Header;