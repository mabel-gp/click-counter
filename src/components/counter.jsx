/* eslint-disable react/prop-types */ //Desactivar validación de tipos de props

function Contador({ numClicks }) {
    return (
        <div className='contador' >
            {numClicks}
        </div>
    );
}

export default Contador;