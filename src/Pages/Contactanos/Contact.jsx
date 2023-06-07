import React from "react";
import { Header } from '../../components/Navegacion/Header';
import Fondo from '../../../public/fondoContac.svg';

function Contact(){
   
    return(
        <>
            <div className="wallpaper">
                <img src={Fondo} alt="Fondo" />
            </div>
            <Header className='header' />
            
        </>
    );
}
export {Contact}