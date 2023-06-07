import React from "react";
import { Header } from '../../components/Navegacion/Header';
import Fondo from '../../../public/fondoContac.svg';
import './Contact.scss';

function Contact(){
   
    return(
        <>
            <div className="wallpaper fondocontact">
                <img src={Fondo} alt="Fondo" />
            </div>
            <Header/>
            <div className="containerContact">
                <div className="right">
                    <img src="/public/img/image 7.png" alt="Foto de andrea" />
                </div>
                <div className="left">
                    <h3>Contactame</h3>
                    <p>Si deseas mas información de mi pagina, llena el siguiente formulario y con el mayor de los gustos responderé cualquier inquietud que tengas.</p>
                    <form >
                        <div className="nameApellido">
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" className="nameInput Input1" name="name" />

                            <label htmlFor="Apellido">Apellido:</label>
                            <input type="text" id="Apellido" className="nameInput" name="Apellido" />
                        </div>
                        
                        <div className="emial">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" className="emailInput" name="email" />
                        </div>
                        

                        <label htmlFor="mensaje" className="mensaje">Mensaje</label>
                        <input type="text" id="mensaje" className="mensajeInput" name="mensaje" />
                        <div className="Button">
                            <input type="button"  value="Enviar" />
                        </div>
                        
                    </form>
                    
                </div>
            </div>
        </>
    );
}
export {Contact}