import React from 'react'

class NavBar extends React.Component{
    
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#/home">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/checkout">Checkout</a>
                        </li>
                    </ul>

                    <ul className="navbar-nav mr-active">
                        <li className="nav-item">
                            <a className="nav-link" href="#"><i className="pi pi-shopping-cart" style={{'fontSize': '2em'}}></i></a>
                        </li>
                    </ul >
                </div>
            </nav>
        )
    }
}

export default NavBar