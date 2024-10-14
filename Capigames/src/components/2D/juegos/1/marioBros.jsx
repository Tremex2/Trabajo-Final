import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/2D/juegos/1/mario bros 1/jsupermario-1.jpg";
import imagen2 from "../../../../public/2D/juegos/1/mario bros 1/jsupermario-2.jpg";
import imagen3 from "../../../../public/2D/juegos/1/mario bros 1/jsupermario-3.jpg";

export function MarioBros() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: 1.31</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán,
          Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés
        </li>
        <li className="lista-general">
          Fecha de salida: 13 de septiembre de 1985
        </li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 10 de 64 bits
        </li>
        <li className="lista-general">
          Procesador: Intel Core i5-2500K / AMD FX-6300
        </li>
        <li className="lista-general">Memoria: 8 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: NVIDIA GeForce GTX 770 con 2 GB / AMD Radeon R9 280
          con 3 GB
        </li>
      </ul>
    </div>,
    "general"
  );
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
            <h1 className="letras-juegos">super mario bros</h1>
            <div className="linea-recta-juegos"></div>
            <div className="espacio-sin-mas">
              <ImagenCambiable
                imagen1={imagen1}
                imagen2={imagen2}
                imagen3={imagen3}
              ></ImagenCambiable>
            </div>
            <div className="linea-recta-juegos"></div>
            <h2 className="letras-juegos" id="prueba">
              Descripcion
            </h2>
            <h3 className="letras-juegos">
              Super Mario Bros.b​ es un videojuego de plataformas desarrollado y
              publicado en 1985 por Nintendo para la Famicom en Japón y para la
              Nintendo Entertainment System (NES) en Norteamérica. Es el sucesor
              del juego arcade de 1983 Mario Bros. y el primero de la serie
              Super Mario. Tras un lanzamiento de prueba para la NES en EE. UU.,
              se adaptó a los salones recreativos internacionales en la consola
              Nintendo Vs. System a principios de 1986. La versión para NES
              salió a la venta en Norteamérica ese mismo año y en las regiones
              PAL en 1987.
            </h3>
          </div>

          <div className="links-de-descarga">
            <div className="letras-juegos inline">
              <div
                className="inline"
                onClick={() =>
                  cambiarContenido(
                    <div>
                      <ul className="">
                        <li className="lista-general">Version: 1.31</li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán, Italiano, Portugués (Brasil), Ruso,
                          Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 13 de septiembre de 1985
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 10 de 64 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i5-2500K / AMD FX-6300
                        </li>
                        <li className="lista-general">Memoria: 8 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: NVIDIA GeForce GTX 770 con 2 GB /
                          AMD Radeon R9 280 con 3 GB
                        </li>
                      </ul>
                    </div>,
                    "general"
                  )
                }
              >
                <ion-icon
                  name="information-circle-outline"
                  size="large"
                  color="white"
                ></ion-icon>
                <h1
                  className={activeButton === "general" ? "active-juegos" : ""}
                >
                  General
                </h1>
              </div>
              <div
                className="inline"
                onClick={() =>
                  cambiarContenido(
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
                    </ul>,
                    "descarga"
                  )
                }
              >
                <ion-icon
                  name="download-outline"
                  size="large"
                  color="white"
                ></ion-icon>
                <h1
                  className={activeButton === "descarga" ? "active-juegos" : ""}
                >
                  Descarga
                </h1>
              </div>
            </div>
            <div className="linea-recta-juegos"></div>
            <div className="contenido">{contenido}</div>
          </div>
        </div>
      </div>
    </>
  );
}
