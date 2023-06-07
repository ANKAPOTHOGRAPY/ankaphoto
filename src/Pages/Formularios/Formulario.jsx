import React from 'react';
import './formulario.scss';
import { Header } from '../../components/Navegacion/Header';
import { Link } from 'react-router-dom';

function Formulario() {
  return (
    <>
      
      <Header />
      <h1>Agendar y Pagar Sesión de Fotografía</h1>
      <form>
        <label for="nombre">Nombre:</label><input type="text" id="nombre" name="nombre" required></input>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required></input>
        <label for="telefono">Teléfono:</label>
        <input type="tel" id="telefono" name="telefono" required></input>
    
        <label for="fecha">Fecha preferida:</label>
        <input type="date" id="fecha" name="fecha" required></input>
    
        <label for="hora">Hora preferida:</label>
        <input type="time" id="hora" name="hora" required></input>
    
        <label for="plan">Seleccionar plan:</label>
        <select id="plan" name="plan">
          <option value="basico">Plan Básico</option>
          <option value="premium">Plan Premium</option>
          <option value="evento">Plan de Evento Especial</option>
        </select>
    
        <label for="tarjeta">Número de tarjeta:</label>
        <input type="text" id="tarjeta" name="tarjeta" required></input>
    
        <label for="cvv">CVV:</label>
        <input type="text" id="cvv" name="cvv" required></input>
    
        <Link >Enviar</Link>
    </form>
    </>
  );
}

export { Formulario };