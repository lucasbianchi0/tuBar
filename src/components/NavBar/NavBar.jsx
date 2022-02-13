import React from 'react';
import './NavBar.css';
import CartWidget from '../Ui/Atoms/CartWidget/CartWidget';


const NavBar = () => {
  return (
    <div className='container-nav'>
      <div className='estructura-Navbar'>
        <div>
            <p>TuBar.com</p>
        </div>
        {/* derecha */}
        <div className='navbar-right'>
          <ul>
              <a href="/">Catalogo</a>
              <a href="/">Reservas</a>
              <a href="/">Nosotros</a>
          </ul>
          <div><CartWidget /></div>
        </div>
        </div>
    </div>
  )
}

export default NavBar