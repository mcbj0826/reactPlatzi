import React from 'react'
import './styles/PageError.css'
//IMPORTANTE MODIFICAR EN EL ARCHIVO API.JS EL RETURN DE LA LISTA PARA QUE SE MUESTRE LOS DATOS EN VEZ DEL ERROR. 

function PageError (props) {
    return <div className="PageError">
        {props.error.message}
    </div>
}

export default PageError