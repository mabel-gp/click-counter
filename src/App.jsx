import './App.css'

function App() {

  return (
      <div>
        <div className='principal-container'>
      
          <Boton 
            texto = 'Click'
            botonDeClick = {true}
            manejarClick={}/>
          <Boton 
            texto = 'Reiniciar'
            botonDeClick = {true}
            manejarClick={}/>
        </div>

        </div>
      </div> 
  )
}

export default App
