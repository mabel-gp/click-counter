import './App.css'
import Boton from './components/boton.jsx';
import Contador from './components/counter.jsx';
import { useState } from 'react';  //Importamos hook

function App() {
  
  // Arreglo con dos elems: 1° es el valor que queremos usar como estado, y la 2° nos permite actualizarlo
  const [numClicks, setNumClicks] = useState(0);

  // Definimos fxs, aquí en la principal

  // Cuando hago click se llama a esta fx
  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  }
  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
      <div>
        <div className='contenedor-principal'>
          <Contador
            // Usamos el estado actual y lo pasamos como prop
            numClicks={numClicks} />
          <Boton 
            texto = 'Click'
            botonDeClick = {true}
          // Asignamos fx respectiva a este prop
            manejarClick = {manejarClick} />
          <Boton 
            texto = 'Reiniciar'
            botonDeClick = {false}
            // Asignamos fx respectiva a este prop
            manejarClick = {reiniciarContador} />
        </div>
      </div> 
  )
}

export default App
