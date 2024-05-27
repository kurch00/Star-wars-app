import logo from './logo.svg';
import Header from './Header'
import ParteEsquerda from './ParteEsquerda'
import Main from './Main'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div>
      <Header />
      <div class="parte-central">
        <ParteEsquerda />
        <Main />
      </div>
    </div>
  
  );
}

export default App;
