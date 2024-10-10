import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/terror/juegos/1/phasmophobia/juegoplasmophobia-2.jpg";
import imagen2 from "../../../../public/terror/juegos/1/phasmophobia/juegoplasmophobia-1.jpg";
import imagen3 from "../../../../public/terror/juegos/1/phasmophobia/juegoplasmophobia-3.jpg";

export function Phasmophobia() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: agosto 2024</li>
        <li className="lista-general">
          Idiomas: Inglés, Español
          (España),Francés,Alemán,bulgaro,checo,danes,holandes, <br />{" "}
          finlandes,griego,hungaro,noruego,ruamno, <br />{" "}
          sueco,turco,cataln,ucraniano, Italiano, Portugués (Brasil), Ruso,
          Chino simplificado y Japonés
        </li>
        <li className="lista-general">Fecha de salida: 18 SEP 2020</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 10 de 64 bits
        </li>
        <li className="lista-general">
          Procesador: Intel Core i5-10600 / AMD Ryzen 5 3600
        </li>
        <li className="lista-general">Memoria: 8 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: NVIDIA RTX 2060 / AMD Radeon RX 5700
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
            <h1 className="letras-juegos">phasmophobia</h1>
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
              Phasmophobia es un juego de terror psicológico cooperativo en
              línea para 4 jugadores. La actividad paranormal está en aumento y
              tú y tu equipo debéis utilizar todo el equipo de cazafantasmas a
              vuestra disposición para reunir la mayor cantidad de pruebas
              posible.
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
                        <li className="lista-general">Version: agosto 2024</li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español
                          (España),Francés,Alemán,bulgaro,checo,danes,holandes,{" "}
                          <br /> finlandes,griego,hungaro,noruego,ruamno, <br />{" "}
                          sueco,turco,cataln,ucraniano, Italiano, Portugués
                          (Brasil), Ruso, Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 18 SEP 2020
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 10 de 64 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i5-10600 / AMD Ryzen 5 3600
                        </li>
                        <li className="lista-general">Memoria: 8 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: NVIDIA RTX 2060 / AMD Radeon RX 5700
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
                      <li className="lista-general">Peso del juego: 21GB</li>
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
