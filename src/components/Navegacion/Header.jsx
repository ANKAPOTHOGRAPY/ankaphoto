import React from 'react';
import './Header.scss'
import { NavLink, Link } from 'react-router-dom';


function Header() {
  return (
    <header>
      <nav>
        <div className="navLeft">
          <Link to="/" className='logo'><p>Andrea Araujo</p></Link>
          <p></p>
        </div>
        <div className="navRight">
          <ul>
            <NavLink to="/sesiones" className="nav">Sesiones</NavLink>
            <NavLink to="/precio" className="nav">Precios</NavLink>
            <NavLink to="/contactanos" className="nav">Contactanos</NavLink>
            <NavLink to="#" className="nav">Sobre mì</NavLink>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export  { Header };