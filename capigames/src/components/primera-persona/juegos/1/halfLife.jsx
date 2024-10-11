import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/primera-persona/juegos/1/half life 2/juegohalf life2-1.jpg";
import imagen2 from "../../../../public/primera-persona/juegos/1/half life 2/juegohalf life2-2.jpg";
import imagen3 from "../../../../public/primera-persona/juegos/1/half life 2/juegohalf life2-3.jpg";

export function HalfLife2() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: noviembre de 2023</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán,
          Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés
        </li>
        <li className="lista-general">Fecha de salida: 16 NOV 2004</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 7/10 de 64 bits
        </li>
        <li className="lista-general">Procesador: 1.7 Ghz</li>
        <li className="lista-general">Memoria: 2 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: DirectX 8.1 level Graphics Card (requires support
          for SSE)
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
            <h1 className="letras-juegos">half life 2</h1>
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
              1998. HALF-LIFE supone un impacto en la industria de juegos con su
              combinación de acción frenética y narración continua y absorbente.
              El título de debut de Valve fue galardonado con más de 50 premios
              que lo consideraron el juego del año hasta convertirse en "El
              mejor juego para PC de la historia", galardón concedido por la...
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
                        <li className="lista-general">
                          Version: noviembre de 2023
                        </li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán, Italiano, Portugués (Brasil), Ruso,
                          Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 16 NOV 2004
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 7/10 de 64 bits
                        </li>
                        <li className="lista-general">Procesador: 1.7 Ghz</li>
                        <li className="lista-general">Memoria: 2 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: DirectX 8.1 level Graphics Card
                          (requires support for SSE)
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
                      <li className="lista-general">Peso del juego: 7GB</li>
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
