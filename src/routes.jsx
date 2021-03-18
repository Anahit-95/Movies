import React from 'react'
import { Route } from 'react-router-dom'
import Home from './views/Home/Home'

function Routes(){
    return(
        <>
            <Route path="/" exact component={Home}/>
        </>
    )
    
}
export default Routes