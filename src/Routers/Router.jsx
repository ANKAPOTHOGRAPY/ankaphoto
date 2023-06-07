import {  Route, Routes } from 'react-router-dom';
import { Home } from '../Pages/Menu/Home';
import { Sessions } from '../Pages/Sesiones/Sessions';
import { Price } from '../Pages/Precio/Price';
import { Contact } from '../Pages/Contactanos/Contact';
import { About } from '../components/Description/About';
import { NotFound } from '../components/404/NotFound';


function AppRouter() {
  return (
    <>
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sesiones' element={<Sessions />} />
          <Route path='/precio' element={<Price />} />
          <Route path='/contactanos' element={<Contact />} />
          <Route path='*' element={<NotFound />}/>
          
        </Routes>
    
    </>
  );
}

export {AppRouter};
