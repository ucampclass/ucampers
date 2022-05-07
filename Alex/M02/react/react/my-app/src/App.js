import Saludar from './components/Saludar';
import {Texto} from './components/Texto';
import {Imagen} from './components/Imagen';
import Parrafo from './components/Parrafo';
import {Boton} from './components/Boton';
import { Estilos } from './components/Estilos';
import './style.css';
import { Imprimir } from './components/Imprimir';

function App() {
  return (
    <div>
   {/* <Saludar />
    <Texto />
    <Imagen />
    <Parrafo />
    <Boton />
    <Estilos /> */}
    <Imprimir />
    </div>
  );
}

export default App;
