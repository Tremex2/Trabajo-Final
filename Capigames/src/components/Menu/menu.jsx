import React, { useState } from 'react';
import {browserRouter, routes, route} from "react-router-dom"
import {Link} from "react-router-dom"
import './menu.css';

export function Menu() {
  const [menuClass, setMenuClass] = useState('izquierda');

  function despliegue() {
    setMenuClass(prevClass => prevClass === 'izquierda' ? 'derecha' : 'izquierda');
  }

  return (
    <>
      <div className="boton-menu" onClick={despliegue}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
      <div className={menuClass} id="menu">
        <div className='menu'><h2> Menu</h2></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="opcion"><h4>opcion</h4></div>
        <div className="boton-menu" onClick={despliegue}></div>
      </div>
    </>
  );
}
