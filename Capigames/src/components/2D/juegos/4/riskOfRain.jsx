import "../../../juegos-css/juegos.css"
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp"
import mega from "../../../../public/links de descarga/mega.png"
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png"
import imagen1 from "../../../../public/2D/juegos/4/Risk of rain/ri1.jpg"
import imagen2 from "../../../../public/2D/juegos/4/Risk of rain/ri2.jpg"
import imagen3 from "../../../../public/2D/juegos/4/Risk of rain/ri3.jpg"
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";

export function RiskOfRain() {
    const [contenido, setContenido] = useState(<div>
        <ul className="">
            <li className="lista-general">Version: 1.31</li>
            <li className="lista-general">Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán, Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés</li>
            <li className="lista-general">Fecha de salida: 8/nov./2023</li>
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
                        <h1 className="letras-juegos">Risk of rain</h1>
                        <div className="linea-recta-juegos"></div>
                        <div className="espacio-sin-mas">
                        <ImagenCambiable imagen1={imagen1} imagen2={imagen2} imagen3={imagen3}></ImagenCambiable>
                        </div>
                        <div className="linea-recta-juegos"></div>
                        <h2 className="letras-juegos" id="prueba">Descripcion</h2>
                        <h3 className="letras-juegos">
                        Risk of Rain Returns es una remasterización del clásico juego de acción y supervivencia roguelike, donde los jugadores controlan a un sobreviviente varado en un planeta alienígena. Enfrentándote a oleadas de enemigos, debes recoger objetos y mejorar tus habilidades mientras la dificultad aumenta con el tiempo. Con niveles generados aleatoriamente y un estilo visual actualizado, el juego ofrece una experiencia intensa y adictiva, con modo cooperativo para jugar con amigos.
                        </h3>
                    </div>

                    <div className="links-de-descarga">
                        <div className="letras-juegos inline">
                            <div className="inline" onClick={() => cambiarContenido(<div>
                                <ul className="">
                                    <li className="lista-general">Version: 1.31</li>
                                    <li className="lista-general">Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán, Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés</li>
                                    <li className="lista-general">Fecha de salida: 8/nov./2023</li>
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
