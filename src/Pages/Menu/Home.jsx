import React from 'react';
import './Home.scss';
import { Header } from '../../components/Navegacion/Header';
import image from '../../../public/Fondo.svg';
import LogoMain from '../../../public/logoMain.svg';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      
      <div className="wallpaper">
        <img src={image} alt="Fondo" />
        
      </div>

      <Header />

      <div className="main">
        <div className="containerLeft">
          <h1>ANKA PHOTOGRAPY</h1>  
          <p>Anka Photograpy es un servicio de fotografia totalmente profesional, confiable y 
            economico. Contratanos ya para tus eventos.</p>

            <div className='Button'>
              <Link to='/precio' className='btnSessions'>Pide tu sesión ya</Link>
              <Link className='btnIndormation'>Ver más</Link>
            </div>
        </div>
        <div className="containerRight">
          <img src={LogoMain} alt="Logo" />
        </div>
      </div>
      


    </>
  );
}

export { Home };