import React from 'react'
import logo from './Assets/logo.svg'
import Cart from './Assets/cart.svg'
function Navbar() {
    return (
        <header className="header">
            <div className="Logo-container">
                <img src={logo} alt=""/>
                <h4 className="logo">Renezo</h4>
            </div>
            <nav>
                <ul className="nav-links">
                    <li ><a href="#" className="nav-link">Spec</a></li>
                    <li ><a href="#" className="nav-link">Product</a></li>
                    <li ><a href="#" className="nav-link">Contact</a></li>
                </ul>
            </nav>  
            <div className="cart">
                <img src={Cart} alt=""/>
            </div>          
        </header>
    )
}

export default Navbar
