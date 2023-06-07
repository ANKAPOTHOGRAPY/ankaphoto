import React from "react";
import '../Precio/Price.scss';
import { Header } from '../../components/Navegacion/Header';
import Fondo from '../../../public/fondoPrice.svg';
import { Link } from "react-router-dom";
import { formulario } from "../Formularios/formulario";

function Price(){
    return(
        <>
            <div className="wallpaper">
                <img src={Fondo} alt="Fondo" />
            </div>
            
            <Header />
            <div className="containerPrice">
                <h1>Precios</h1>

                <p className="descriParrafo">Acontinuación podras agendar cualquiera de nuestros planes para una sesión fotografica, por favor elige el que mas se adapte a tu necesidad u evento.</p>
                 <div className="containerPrices">
                    <div className="price Espress">
                        <a href="/">Sesión Básica</a>
                        <h4>$80.000</h4>
                        <p>
                            <li>Duración de la sesión: 1 hora</li>
                            <li>Entrega de 15 fotografías digitales en alta resolución.</li>
                            <li>Edición básica de las imágenes seleccionadas.</li>
                            <li>Galería en línea privada para ver y compartir las fotos.</li>
                           
                        </p>
                        <Link to= '/formulario' className="BtnAgendar">Agendar</Link>
                    </div>
                    <div className="price Foto">
                        <a href="/">Sesión Premium</a>
                        <h4>$200.000</h4>
                        <p>
                            <li>Duración de la sesión: 2 hora</li>
                            <li>Entrega de 30 fotografías digitales en alta resolución.</li>
                            <li>Edición profesional de las imágenes seleccionadas.</li>
                            <li>Galería en línea privada para ver y compartir las fotos.</li>
                        </p>
                        <Link to= '/formulario' className="BtnAgendar">Agendar</Link>
                    </div>
                    <div className="price Digital">
                        <a href="/">Sesión de Evento Especial</a>
                        <h4>$350.000</h4>
                        <p>
                            <li>Cobertura del evento durante un tiempo específico acordado.</li>
                            <li>Fotografía ilimitada durante el evento.</li>
                            <li>Entrega de fotografías digitales en alta resolución.</li>
                            <li>Edición profesional de las imágenes seleccionadas.</li>
                        </p>
                        <Link to= '/formulario' className="BtnAgendar">Agendar</Link>
                    </div>
                 </div>
            </div>
        </>
        
    );
}
export {Price}
