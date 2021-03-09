import React from 'react'

import NavBar from './navbar'
import Rotas from './rotas'

import 'bootswatch/dist/flatly/bootstrap.css'

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

import './css/custom.css'
class App extends React.Component{
  render(){
    return(
      <>
        <NavBar />
        <div className="container">
            <Rotas />
        </div>
      </>
    )
  }
}

export default App