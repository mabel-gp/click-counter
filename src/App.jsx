import './App.css'
import Boton from './components/boton.jsx';

function App() {
  
  // Definimos fx, aquí en la principal

  const manejarClick = () => {
    console.log('Click');
  }
  const reiniciarContador = () => {
    console.log('Reiniciar')
  }

  return (
      <div>
        <div className='principal-container'>
      
          <Boton 
            texto = 'Click'
            botonDeClick = {true}
            // Asignamos fx respectiva a este prop
            manejarClick = {manejarClick}/>
          <Boton 
            texto = 'Reiniciar'
            botonDeClick = {false}
            // Asignamos fx respectiva a este prop
            manejarClick = {reiniciarContador}/>
        </div>
      </div> 
  )
}

export default App
