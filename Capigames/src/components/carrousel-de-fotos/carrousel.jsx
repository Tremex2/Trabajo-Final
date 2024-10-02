import { useState } from 'react';
import "./carrousel.css"


const ImagenCambiable = ({ imagen1, imagen2 }) => {

    const [imagen, setImagen] = useState(imagen1);
    const [fadeOut, setFadeOut] = useState(false);

    const cambiarImagen = () => {
        setFadeOut(true)
        setTimeout(() => {
            if (imagen === imagen1) {
                setImagen(imagen2)
            } else {
                setImagen(imagen1)
            }
            setFadeOut(false)
        }, 500)
    }


    return (
        <>
            <h1>xd</h1>
            <div className='carrousel'>
                <img className={`imagen ${fadeOut ? "imagenfadeOut" : ""}`} src={imagen} alt="" onClick={cambiarImagen} id='foto' />
                <button onClick={cambiarImagen}>soplame la vela</button>
            </div>
        </>
    )
}

export default ImagenCambiable;