import React from 'react';
import classes from './Casilla.module.css';
import circulo from '../../assets/circulo.png';
import cruz from '../../assets/cruz.png';
import transparente from '../../assets/transparente.png'
const casilla = (props) =>{
    let imagen =  '';
    
    if(props.tipo === 'circulo'){
        imagen =  <img className={classes.Imagen}  alt='' src={circulo} />
    }
    else if( props.tipo === 'cruz'){
        imagen =  <img className={classes.Imagen} alt='' src={cruz} />
    }
    else{
        //imagen = null;
        imagen =  <img className={classes.Imagen} alt='' src={transparente} />
    }
    return(
        <div className={classes.Casilla} onClick={props.clicked}>{imagen}</div>
    )

}

export default casilla;