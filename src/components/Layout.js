import React from 'react'

import Navbar from './Navbar'

function Layout (props) {
    // const children = pros.children
    return ( 
        <React.Fragment>
           <Navbar /> 
            {props.children}
        </React.Fragment>
    ) 
}

export default Layout