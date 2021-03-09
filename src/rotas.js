import React from 'react'

import { Route, Switch, HashRouter } from 'react-router-dom'

import Home from './views/home'
import Checkout from './views/checkout'
import Cart from './views/cart'

function Rotas(){
    return(
        <HashRouter>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/checkout" component={Checkout}/>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </HashRouter>
    )
}

export default Rotas