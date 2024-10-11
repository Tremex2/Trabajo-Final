import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/terror/juegos/4/the sinking city/juegothe sinking city-1.jpg";
import imagen2 from "../../../../public/terror/juegos/4/the sinking city/juegothe sinking city-2.jpg";
import imagen3 from "../../../../public/terror/juegos/4/the sinking city/juegothe sinking city-3.jpg";

export function TheSinkingCity() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: enero 2024</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés,
          Alemán,arabe,polaco,checo, Italiano, Portugués (Brasil), Ruso, Chino
          simplificado y Japonés
        </li>
        <li className="lista-general">Fecha de salida: 26 FEB 2021</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 10 de 64 bits
        </li>
        <li className="lista-general">
          Procesador: Intel Core i7-3770, 3.5 GHz / AMD FX-8350, 4.0 GHz, Ryzen
          5 - 1400 or better
        </li>
        <li className="lista-general">Memoria: 8 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: NVIDIA GeForce GTX 970 (4GB VRAM with Shader Model
          5.0) / AMD Radeon R9 290 or better
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
            <h1 className="letras-juegos">The Sinking City</h1>
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
              En la costa este de Estados Unidos, durante los años 20, fuerzas
              sobrenaturales se han apoderado de la ciudad semisumergida de
              Oakmont. Eres un investigador privado que trata de averiguar qué
              ha poseído la ciudad y corrompido las mentes de sus habitantes...
              y la tuya.
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
                        <li className="lista-general">Version: enero 2024</li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán,arabe,polaco,checo, Italiano,
                          Portugués (Brasil), Ruso, Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 26 FEB 2021
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 10 de 64 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i7-3770, 3.5 GHz / AMD FX-8350,
                          4.0 GHz, Ryzen 5 - 1400 or better
                        </li>
                        <li className="lista-general">Memoria: 8 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: NVIDIA GeForce GTX 970 (4GB VRAM
                          with Shader Model 5.0) / AMD Radeon R9 290 or better
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
                      <li className="lista-general">Peso del juego: 25GB</li>
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
