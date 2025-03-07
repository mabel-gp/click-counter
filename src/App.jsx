import './App.css'

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
            manejarClick={}/>
          <Boton 
            texto = 'Reiniciar'
            botonDeClick = {false}
            manejarClick={}/>
        </div>
      </div> 
  )
}

export default App
