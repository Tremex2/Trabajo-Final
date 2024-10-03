import { useState } from 'react';
import './carrousel.css';

const ImagenCambiable = ({ imagen1, imagen2, imagen3 }) => {
    const [imagen, setImagen] = useState(imagen1);
    const [fadeOut, setFadeOut] = useState(false);

    const botonIzquierdo = () => {
        setFadeOut(true);
        setTimeout(() => {
            if (imagen === imagen3) {
                setImagen(imagen2);
            } else if (imagen === imagen2) {
                setImagen(imagen1);
            } else {
                setImagen(imagen3);
            }
            setFadeOut(false);
        }, 500);
    };
    const botonDerecho = () => {
        setFadeOut(true);
        setTimeout(() => {
            if (imagen === imagen1) {
                setImagen(imagen2);
            } else if (imagen === imagen2) {
                setImagen(imagen3);
            } else {
                setImagen(imagen1);
            }
            setFadeOut(false);
        }, 500);
    };
    return (
        <>
            <div className='contenedor-carrousel'>
                <button className='boton-carrousel-izquierdo' onClick={botonIzquierdo}>Izquierda</button>
                <div className='imagen-carrousel'>
                    <img
                        className={`imagen ${fadeOut ? 'imagenfadeOut' : ''}`}
                        src={imagen}
                        alt="Carrousel"
                        id='foto'
                        onClick={botonIzquierdo}
                    />
                </div>
                <button className='boton-carrousel-derecho' onClick={botonDerecho}>Derecha</button>
            </div>
        </>
    );
};

export default ImagenCambiable;
