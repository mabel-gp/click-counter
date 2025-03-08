/* eslint-disable react/prop-types */ //Desactivar validación de tipos de props
import '../stylesheets/boton.css'

// Boton({texto}) => sintaxis de desestructuración
function Boton({ texto, botonDeClick, manejarClick }){
    return (
        <button
          // Decide si el botón se mostrará como de click o de reinicio
          // Asigna una clase a su botón respectivo
          className={botonDeClick ? 'boton-click' : 'boton-reiniciar'}
          // Se llama a manejar clic cuando ocurra el evento, manejarclick es una fx que se pasa como prop
          // Manejar click se define en App.jsx
          onClick={manejarClick}>
          {texto}
        </button>
    )
}

export default Boton;