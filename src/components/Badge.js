import React from 'react'
import "./styles/Badge.css"
import confLogo from '../images/badge-header.svg'


class Badge extends React.Component {
    render() {
    
        const firstName = 'John'
        const lastName = 'Suarez'
        return <div className="Badge">
            <div className="Badge__header">
                <img src={confLogo} alt =" Logo de la conferencia "></img>
            </div>

            <div className="Badge__section-name">
                <img  className= "Badge__avatar" src= {this.props.avatarUrl} alt = "Imágen Avatar"></img>
                <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{this.props.jobTitle}</h3>
                <div>{this.props.twitter}</div>
            </div>

            <div className="Badge__footer">#Platziconf</div>
            
        </div>    
    }
}

export default Badge