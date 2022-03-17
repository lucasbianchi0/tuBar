import React, {useContext} from 'react';

import './NavBar.css';
import CartWidget from '../Ui/Atoms/CartWidget/CartWidget';
import 'react-router-dom'
import { Link } from 'react-router-dom'
import {CartContext} from '../../Contexts/Context'


const NavBar = () => {
  const {cartAmount} = useContext(CartContext)
  return (
    <div className='container-nav'>
      <div className='estructura-Navbar'>
        <div>
            <p>TuBar.com</p>
        </div>
        {/* derecha */}
        <div className='navbar-right'>
          <ul>
            <Link to="/">Catalogo</Link>
            <Link to="/home">Home</Link>
            <Link to="/contacto">Contacto</Link>
            <p>{cartAmount}</p>
          </ul>
          <div><CartWidget /></div>
        </div>
        </div>
    </div>
  )
}

export default NavBar