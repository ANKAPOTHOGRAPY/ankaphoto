import React from 'react';
import './Header.scss'


function Header() {
  return (
    <header>
      <nav>
        <div className="navLeft">
          <p>Andrea Araujo</p>
        </div>
        <div className="navRight">
          <ul>
            <li><a href="">Sesiones</a></li>
            <li><a href="">Precios</a></li>
            <li><a href="">Contactanos</a></li>
            <li><a href="">Sobre mì</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export  {Header};