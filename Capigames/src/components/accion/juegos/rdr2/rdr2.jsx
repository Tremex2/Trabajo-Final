import "../../../juegos-css/juegos.css"
import { useState } from "react";


export function Rdr2() {
    const [contenido, setContenido] = useState(<h1>Seleccione una opción</h1>);

    const cambiarContenido = (nuevoContenido) => {
        setContenido(nuevoContenido);
    };
    return (
        <>
            <div className="contenedor-del-contenedor-juegos">
                <div className="contenedor-juegos">
                    <div className="juego">
                        <h1 className="letras-juegos">RDR2</h1>
                        <div className="linea-recta-juegos"></div>
                        <div className="espacio-sin-mas"></div>
                        <div className="linea-recta-juegos"></div>
                        <h2 className="letras-juegos" id="prueba">Descripcion</h2>
                        <h3 className="letras-juegos">
                            Red Dead Redemption 2 (RDR2) es un juego de acción y aventura en mundo abierto ambientado en el ocaso del Viejo Oeste. Asume el papel de Arthur Morgan, un forajido miembro de la banda de Van der Linde, mientras navegas por un mundo vasto y detallado lleno de misiones emocionantes, personajes memorables y decisiones morales que impactan la narrativa.
                        </h3>
                    </div>

                    <div className="links-de-descarga">
                        <div className="letras-juegos inline">
                            <div className="inline" style={{ margin: "15px" }} onClick={() => cambiarContenido(<div>
                                <ul className="">
                                    <li className="lista-general">Version: 1.31</li>
                                    <li className="lista-general">Idiomas: Inglés,
                                        Español (Latinoamérica y España),
                                        Francés,
                                        Alemán,
                                        Italiano,
                                        Portugués (Brasil),
                                        Ruso,
                                        Chino simplificado y
                                        Japonés</li>
                                    <li className="lista-general">Fecha de salida: 26 de octubre de 2018</li>
                                </ul>
                                <ul>
                                    <li className="lista-general">Requisitos</li>
                                    <li className="lista-general">Sistema operativo: Windows 10 de 64 bits</li>
                                    <li className="lista-general">Procesador: Intel Core i5-2500K / AMD FX-6300</li>
                                    <li className="lista-general">Memoria: 8 GB RAM</li>
                                    <li className="lista-general">Tarjeta de vídeo: NVIDIA GeForce GTX 770 con 2 GB / AMD Radeon R9 280 con 3 GB</li>
                                </ul>
                            </div>)}>
                                <ion-icon name="information-circle-outline" size="large" color="white"></ion-icon>
                                <h1>General</h1>
                            </div>
                            <div className="inline" style={{ margin: "15px" }} onClick={() => cambiarContenido(

                            )}>
                                <ion-icon name="download-outline" size="large" color="white"></ion-icon>
                                <h1>Descarga</h1>
                            </div>
                        </div>
                        <div className="linea-recta-juegos"></div>
                        <div className="contenido">
                            {contenido} {/* Muestra el contenido basado en el estado */}
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}