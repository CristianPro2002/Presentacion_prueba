import React from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import './Estilos_Navbar/estilo_nav.css'
const Director = () => {

let Navigate  = useNavigate();
        
    return (
        <div className='Contenedor_navbarsito'>
             <div className="botones ">
             <button  onClick={() => Navigate("/Roles")} class="btn thirde">Roles
          </button>
             <button  onClick={() => Navigate("/Director")}  class="btn thirde">Home
          </button>
          <button   onClick={() => Navigate("/Tabla_director")} class="btn thirde">Tabla de usuarios
          </button>
         
          </div>
        </div>
    )
    
}

export default Director
