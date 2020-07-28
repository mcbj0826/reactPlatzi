// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);

import React from 'react';
import ReactDOM from 'react-dom';
// const name = 'Angela'
// const element = <h1>Hello, Platzi Badges!</h1>;  // esto sea hace con JSX
// const jsx = <h1>Hola soy , {name}</h1>
const jsx = (<div>
    <h1> Hola, soy John
    </h1>
    <p>Soy ingeniero Frontend</p>
    </div>)
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
