import React from "react";
import '../Precio/Price.scss';
import { Header } from '../../components/Navegacion/Header';
import Fondo from '../../../public/fondoPrice.svg';

function Price(){
    return(
        <>
            <div className="wallpaper">
                <img src={Fondo} alt="Fondo" />
            </div>
            
            <Header />
            <div className="containerPrice">
                <h1>Precios</h1>

                <p className="descriParrafo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                 <div className="containerPrices">
                    <div className="price Espress">
                        <a href="/">Express</a>
                        <h4>$50.000</h4>
                        <p>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </p>
                        <a href="/" className="BtnAgendar">Agendar</a>
                    </div>
                    <div className="price Foto">
                        <a href="/">Solo fotos</a>
                        <h4>$150.000</h4>
                        <p>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </p>
                        <a href="/" className="BtnAgendar">Agendar</a>
                    </div>
                    <div className="price Digital">
                        <a href="/">100% digital</a>
                        <h4>$250.000</h4>
                        <p>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                        </p>
                        <a href="/" className="BtnAgendar">Agendar</a>
                    </div>
                 </div>
            </div>
        </>
        
    );
}
export {Price}