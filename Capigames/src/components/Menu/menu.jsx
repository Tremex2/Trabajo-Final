import React, { useState } from 'react';
import './menu.css';


export function Menu() {
  const [menuClass, setMenuClass] = useState('izquierda');

  function despliegue() {
    setMenuClass(prevClass => prevClass === 'izquierda' ? 'derecha' : 'izquierda');
  }

  return (
    <>
      <div className="boton-menu" onClick={despliegue}>
        <div className="barra1"></div>
        <div className="barra2"></div>
        <div className="barra3"></div>
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
        <div className="boton-menu-cerrar" onClick={despliegue}><h2>Cerrar</h2></div>
      </div>
    </>
  );
}
