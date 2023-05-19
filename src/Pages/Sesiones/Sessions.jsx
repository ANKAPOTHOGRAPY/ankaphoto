import React from "react";
import { Header } from '../../components/Navegacion/Header';
import '../Sesiones/Sessions.scss';


function Sessions() {
    return(
        <>
        <div className="containerSessions">
            
            <Header />
            <div className="sessions">
                <div className="Item1">
                    <p>Anderson</p>
                    <img src="../../../public/img/image 3.png" alt="imagen de Anderson" />
                </div>

                <div className="Item2">
                    <p>Mileidys</p>
                    <img src="../../../public/img/image 5.png" alt="imagen de Anderson" />
                </div>

                <div className="Item3">
                    <p>Maite</p>
                    <img src="../../../public/img/image 6.png" alt="imagen de Anderson" />
                </div>

                <div className="Item4">
                    <p>Kyanna</p>
                    <img src="../../../public/img/image 4.png" alt="imagen de Anderson" />
                </div>
            </div>
            

        </div>
        
        </>
        
    );
}

export {Sessions}