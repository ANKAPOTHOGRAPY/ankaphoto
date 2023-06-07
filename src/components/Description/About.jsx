import React from "react";
import './About.scss'
import { Link } from "react-router-dom";

function About (){

    return(
        <>
            <div className="containerAbout">
                <div className="right">
                    <img src="/public/img/fondo_about.png" alt="Imagen de fondo" />
                </div>

                <div className="left">
                    <h1>ANDREA ARAUJO</h1>
                    <p>Desde niña he mostrado un gran aprecio por la fotografía, a medida que pasaron los años fuí aprendiendo de manera autonoma y cuando pude inicié a estudiar de manera mas profesional. Desde que recuerdo, me la paso horas tomando fotos incluso a lo que para otras personas es minimo e insignificante, siempre he pensado y soy fiel a la creencia que todo en el mundo tiene una particular belleza si se busca desde el angulo indicado.</p>
                    <div className="button">
                        <Link to='/sesiones'>Pide tu sesiòn ya</Link>
                    </div>
                </div>
                
            </div>
        </>
    );
}

export {About};