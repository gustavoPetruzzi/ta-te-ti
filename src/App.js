import React, { useState, useEffect, useRef } from 'react';

import './App.css';

import Casilla from './components/Casilla/Casilla';




function App() {
  const didMountRef = useRef(false);
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
  const [primerJugador, setJugador] = useState(true);
  const checkearLinea = (state, casilla1, casilla2, casilla3) =>{
    if( state[casilla1].tipo === '' || state[casilla2].tipo === '' || state[casilla3].tipo === ''){
      return false;
    }
    else if( state[casilla1].tipo === state[casilla2].tipo && state[casilla1].tipo === state[casilla3].tipo){
      return true;
    }
    return false;
  }

  const checkearGanador = () =>{
    let ganador;
    primerJugador ? ganador = "Jugador 2" : ganador = "Jugador 1";
    if(checkearLinea(casillas, 0, 1, 2) || checkearLinea(casillas, 3 ,4 ,5 ) || checkearLinea(casillas, 6, 7, 8)){
      alert("Ganador " + ganador);
    }
    else if(checkearLinea(casillas, 0, 3, 6) || checkearLinea(casillas, 1, 4, 7) || checkearLinea(casillas, 2, 5, 8)){
      alert("Ganador " + ganador);
    }
    else if(checkearLinea(casillas, 0,4,8) || checkearLinea( casillas, 2, 4, 6)){
      alert("Ganador " + ganador);
    }
    
  }

  useEffect(()=>{

    if(didMountRef.current){
      checkearGanador();
    }else didMountRef.current = true
  })
  
  
  const cambiarTipo = (index) =>{
    const casillasModificadas = casillas;
    if(casillas[index].tipo === '' ){
      if(primerJugador){
        casillasModificadas[index].tipo = 'cruz';
      }
      else{
        casillasModificadas[index].tipo = 'circulo'
      }
      
      setJugador(prevState => !prevState);
      setCasilla([
        ...casillasModificadas,
      ])      
    }
    else{
      return false;
    }
    
  }
 
  return (
    <div className="App">
      <div className ="Jugador1">
        <h2 className={primerJugador ? "Jugador Turno": "Jugador"}> Jugador 1</h2>
      </div>
      <div className="Tablero">
        {casillas.map((casilla, index) =>{
          
          return(
            <Casilla key={index} tipo={casilla.tipo} ocupada={casilla.tipo !== ''} clicked={() =>cambiarTipo(index)} />
          )
        })}
      </div>
      <div className="Jugador2">
        <h2 className={!primerJugador ? "Jugador Turno" : "Jugador"}> Jugador 2</h2>
      </div> 

    </div>
  );
}

export default App;
