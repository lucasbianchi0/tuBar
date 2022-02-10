import React from 'react';
import './NavBar.css';


const NavBar = () => {
  return (
    <div className='container-nav'>
      <div className='estructura-Navbar'>
          <div>
              <p>TuBar.com</p>
          </div>
        
          <ul>
              <a href="/">Catalogo</a>
              <a href="/">Reservas</a>
              <a href="/">Nosotros</a>
          </ul>
        </div>
    </div>
  )
}

export default NavBar