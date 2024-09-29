import "../../../juegos-css/juegos.css"
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp"
import mega from "../../../../public/links de descarga/mega.png"
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png"

export function SilentHill4() {
    const [contenido, setContenido] = useState(<div>
        <ul className="">
            <li className="lista-general">Version: 1.31</li>
            <li className="lista-general">Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán, Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés</li>
            <li className="lista-general">Fecha de salida: 26 de octubre de 2018</li>
        </ul>
        <ul>
            <li className="lista-general">Requisitos</li>
            <li className="lista-general">Sistema operativo: Windows 10 de 64 bits</li>
            <li className="lista-general">Procesador: Intel Core i5-2500K / AMD FX-6300</li>
            <li className="lista-general">Memoria: 8 GB RAM</li>
            <li className="lista-general">Tarjeta de vídeo: NVIDIA GeForce GTX 770 con 2 GB / AMD Radeon R9 280 con 3 GB</li>
        </ul>
    </div>, 'general');
    const [activeButton, setActiveButton] = useState(null);

    const cambiarContenido = (nuevoContenido, button) => {
        setContenido(nuevoContenido);
        setActiveButton(button);
    };

    return (
        <>
            <div className="contenedor-del-contenedor-juegos">
                <div className="contenedor-juegos">
                    <div className="juego">
                        <h1 className="letras-juegos">ultrakill</h1>
                        <div className="linea-recta-juegos"></div>
                        <div className="espacio-sin-mas"></div>
                        <div className="linea-recta-juegos"></div>
                        <h2 className="letras-juegos" id="prueba">Descripcion</h2>
                        <h3 className="letras-juegos">
                            Red Dead Redemption 2 (RDR2) es un juego de acción y aventura en mundo abierto ambientado en el ocaso del Viejo Oeste.
                        </h3>
                    </div>

                    <div className="links-de-descarga">
                        <div className="letras-juegos inline">
                            <div className="inline" onClick={() => cambiarContenido(<div>
                                <ul className="">
                                    <li className="lista-general">Version: 1.31</li>
                                    <li className="lista-general">Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán, Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés</li>
                                    <li className="lista-general">Fecha de salida: 26 de octubre de 2018</li>
                                </ul>
                                <ul>
                                    <li className="lista-general">Requisitos</li>
                                    <li className="lista-general">Sistema operativo: Windows 10 de 64 bits</li>
                                    <li className="lista-general">Procesador: Intel Core i5-2500K / AMD FX-6300</li>
                                    <li className="lista-general">Memoria: 8 GB RAM</li>
                                    <li className="lista-general">Tarjeta de vídeo: NVIDIA GeForce GTX 770 con 2 GB / AMD Radeon R9 280 con 3 GB</li>
                                </ul>
                            </div>, 'general')}>
                                <ion-icon name="information-circle-outline" size="large" color="white"></ion-icon>
                                <h1 className={activeButton === 'general' ? 'active-juegos' : ''}>
                                    General
                                </h1>
                            </div>
                            <div className="inline" onClick={() => cambiarContenido(
                                <ul>
                                    <li className="lista-general">Peso del juego: 150GB</li>
                                    <li className="lista-links">
                                        <div className="fit-content">
                                            <img src={mediafire} alt="" />
                                        </div>
                                        Mediafire
                                    </li>
                                    <li className="lista-links">
                                        <div className="fit-content">
                                            <img src={mega} alt="" />
                                        </div>
                                        Mega
                                    </li>
                                    <li className="lista-links">
                                        <div className="fit-content">
                                            <img src={pixelDrain} alt="" />
                                        </div>
                                        Pixeldrain
                                    </li>
                                </ul>
                                , 'descarga')}>
                                <ion-icon name="download-outline" size="large" color="white"></ion-icon>
                                <h1 className={activeButton === 'descarga' ? 'active-juegos' : ''}>
                                    Descarga
                                </h1>
                            </div>
                        </div>
                        <div className="linea-recta-juegos"></div>
                        <div className="contenido">
                            {contenido}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
