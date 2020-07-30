import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './global.css'
import Badge from './components/Badge'


const container = document.getElementById('app')

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<Badge firstName="John" lastName="Suárez" jobTitle="Frontend Engineer" twitter="@fredy082" avatarUrl="acá va la imágen del avatar mi foto" />, container)
