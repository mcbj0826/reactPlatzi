import React from 'react'
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render() {
        return <div>
            <div>
                <img src={confLogo} alt =" Logo de la conferencia "></img>
            </div>

            <div>
                <img src= "" alt = "Imágen Avatar"></img>
                <h1>John <br/> Suárez</h1>

                
            </div>

            <div>
                <p>Frontend Engineer</p>
                <p>@johnfredy26</p>

            </div>
            
        </div>    
    }
}

export default Badge