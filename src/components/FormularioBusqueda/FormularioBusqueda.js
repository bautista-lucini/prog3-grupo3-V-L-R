import "./FormularioBusqueda.css";
import React from 'react';
//import { FontAwesomeIcon } from '@fontawesome/react-fontawesome'; <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />


const FormularioBusqueda = () => {
  return (
    <div className='Form-Busqueda'>
        <form>
        <input className="busqueda"  type="text" placeholder="Títulos, géneros ..." />
        <button type="submit">
            
    
        </button>
      </form>
      
    </div>
  )
}

export default FormularioBusqueda
