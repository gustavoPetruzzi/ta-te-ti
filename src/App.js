import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Casilla from './components/Casilla/Casilla';

function App() {
  const valoresIniciales = [
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
    {tipo: ''},
  ]
  const [casillas, setCasilla] = useState(valoresIniciales);

  const cambiarTipo = (index, tipo) =>{
    const casillasModificadas = casillas;
    casillasModificadas[index].tipo = tipo;
    setCasilla([
      ...casillas,
    ])
    console.log(casillas)
  }
 
  return (
    <div className="App">
      <div>
        <h2 style={{textAlign: "center"}}> Jugador 1</h2>
      </div>
      <div className="Tablero">
        <Casilla hover tipo={casillas[0].tipo} clicked={() =>cambiarTipo( 0, 'circulo')} />
        <Casilla tipo={casillas[1].tipo} clicked={() =>cambiarTipo( 1, 'circulo')} />
        <Casilla tipo={casillas[2].tipo} clicked={() =>cambiarTipo( 2, 'circulo')} />
        <Casilla tipo={casillas[3].tipo} clicked={() =>cambiarTipo( 3, 'circulo')} />
        <Casilla tipo={casillas[4].tipo} clicked={() =>cambiarTipo( 4, 'circulo')} />
        <Casilla tipo={casillas[5].tipo} clicked={() =>cambiarTipo( 5, 'circulo')} />
        <Casilla tipo={casillas[6].tipo} clicked={() =>cambiarTipo( 6, 'circulo')} />
        <Casilla tipo={casillas[7].tipo} clicked={() =>cambiarTipo( 7, 'circulo')} />
        <Casilla tipo={casillas[8].tipo} clicked={() =>cambiarTipo( 8, 'cruz')} />
      </div>
      <div>
        <h2 style={{textAlign: "center"}}> Jugador 2</h2>
      </div> 

    </div>
  );
}

export default App;
