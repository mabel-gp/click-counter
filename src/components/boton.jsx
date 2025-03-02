// Boton({texto}) => sintaxis de desestructuración
function Boton({ texto }){
    return (
        <button
          className=''>
          {texto}
        </button>
    )
}

export default Boton;