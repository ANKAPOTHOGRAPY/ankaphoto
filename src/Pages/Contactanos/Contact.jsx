import React from "react";
import { Header } from '../../components/Navegacion/Header';
import Fondo from '../../../public/fondoContac.svg';
import './Contact.scss';

function Contact(){
   
    return(
        <>
            <div className="wallpaper">
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
                        <label htmlFor="name">Nombre</label>
                        <input type="text" id="name" name="name" placeholder="Ingrese su nombre"/>

                        <label htmlFor="Apellido">Apellido</label>
                        <input type="text" id="Apellido" name="Apellido" placeholder="Ingrese su Apellido"/>

                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Ingrese su correo electrònico"/>

                        <label htmlFor="mensaje">Mensaje</label>
                        <input type="text" id="mensaje" name="mensaje" />

                        <input type="button" value="Enviar" />
                    </form>
                    
                </div>
            </div>
        </>
    );
}
export {Contact}