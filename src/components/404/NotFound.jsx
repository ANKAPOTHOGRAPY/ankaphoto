import React from "react";
import { Link } from 'react-router-dom';
import './NotFound.scss';

function NotFound(){
    return(
        
            <div className="container">
                <h1>404</h1>
                <h3>Ooops, page not found</h3>
                <div className="line"></div>
                <p>Sorry, but the recuested page is not found.</p>
                <Link to='/' className="Link">Go to home page</Link>
            </div>
            
    );
}

export {NotFound}