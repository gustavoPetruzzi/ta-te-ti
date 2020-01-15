import React from 'react';
import classes from './Casilla.module.css';
import circulo from '../../assets/circulo.png';
import cruz from '../../assets/cruz.png';
import transparente from '../../assets/transparente.png'
const casilla = (props) =>{
    let imagen =  '';
    let clasesAdjuntas = [classes.Imagen, classes.Desocupada];
    
    if(props.ocupada){
        clasesAdjuntas = [classes.Imagen, classes.Ocupada];
    }
    if(props.tipo === 'circulo'){
        imagen =  <img className={clasesAdjuntas.join(' ')}  alt='' src={circulo} />
    }
    else if( props.tipo === 'cruz'){
        imagen =  <img className={clasesAdjuntas.join(' ')} alt='' src={cruz} />
    }
    else{
        //imagen = null;
        imagen =  <img className={clasesAdjuntas.join(' ')} alt='' src={transparente} />
    }
    return(
        <div className={classes.Casilla} onClick={props.clicked}>{imagen}</div>
    )

}

export default casilla;