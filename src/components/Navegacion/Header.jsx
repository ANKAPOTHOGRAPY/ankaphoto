import React from 'react';
import './Header.scss'
import { NavLink, Link, useLocation } from 'react-router-dom';


function Header() {
  
  const location = useLocation();
  const isContactanosRoute = location.pathname === '/contactanos';

  return (
    <header>
      <nav>
        <div className="navLeft">
          <Link to="/" className='logo'><p >Andrea Araujo</p></Link>
        </div>
        <div className="navRight" >
          <ul >
            <NavLink to="/sesiones" className="nav" style={{ color: isContactanosRoute ? 'black' : 'inherit' }} >Sesiones</NavLink>
            <NavLink to="/precio" className="nav" style={{ color: isContactanosRoute ? 'black' : 'inherit' }}>Precios</NavLink>
            <NavLink to="/contactanos" className="nav" style={{ color: isContactanosRoute ? 'black' : 'inherit' }}>Contactanos</NavLink>
            <NavLink to="#" className="nav" style={{ color: isContactanosRoute ? 'black' : 'inherit' }}>Sobre mì</NavLink>
            
          </ul>
        </div>
      </nav>
    </header>
  );
}

export  { Header };