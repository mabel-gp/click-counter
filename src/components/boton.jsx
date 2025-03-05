/* eslint-disable react/prop-types */ //Desactivar validación de tipos de props

// Boton({texto}) => sintaxis de desestructuración
function Boton({ texto, botonDeClick, manejarClic }){
    return (
        <button
          className={botonDeClick ? 'boton-click' : 'boton-reiniciar'}
          onClick={manejarClic}>
          {texto}
        </button>
    )
}

export default Boton;