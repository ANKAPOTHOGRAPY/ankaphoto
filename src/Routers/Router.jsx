import { BrowserRouter as router, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Navegacion/Header';
import { Home } from '../Pages/Menu/Home';
import { Sessions } from '../Pages/Sesiones/Sessions';
import { Price } from '../Pages/Precio/Price';
import { Contact } from '../Pages/Contactanos/Contact';


function AppRouter() {
  return (
    <>
    <Header />
        
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/sesiones' element={<Sessions />} />
          <Route path='/precio' element={<Price />} />
          <Route path='/contactanos' element={<Contact />} />
        </Routes>
    
    </>
  );
}

export {AppRouter};
