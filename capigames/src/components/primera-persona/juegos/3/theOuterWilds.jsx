import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/primera-persona/juegos/3/The Outer Worlds/jthe outer worlds-1.jpg";
import imagen2 from "../../../../public/primera-persona/juegos/3/The Outer Worlds/jthe outer worlds-2.jpg";
import imagen3 from "../../../../public/primera-persona/juegos/3/The Outer Worlds/jthe outer worlds-3.jpg";

export function TheOuterWilds() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: febrero de 2023</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán,
          Italiano, Portugués (Brasil), Ruso, Chino simplificado y Japonés
        </li>
        <li className="lista-general">Fecha de salida: 23 OCT 2020</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 10 de 64 bits
        </li>
        <li className="lista-general">
          Procesador: Intel Core i7-7700K or Ryzen 5 1600
        </li>
        <li className="lista-general">Memoria: 8 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: GeForce GTX 1060 6GB or Radeon RX 470
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
            <h1 className="letras-juegos">The Outer Worlds</h1>
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
              The Outer Worlds es un galardonado RPG para un jugador de Obsidian
              Entertainment y Private Division. Mientras exploras, la
              personalidad que adoptes determinará cómo se desarrolla esta
              historia basada en el personaje. En las ecuaciones de la colonia,
              tú eres la variable imprevista.
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
                          Version: febrero de 2023
                        </li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán, Italiano, Portugués (Brasil), Ruso,
                          Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 23 OCT 2020
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 10 de 64 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i7-7700K or Ryzen 5 1600
                        </li>
                        <li className="lista-general">Memoria: 8 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: GeForce GTX 1060 6GB or Radeon RX
                          470
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
                      <li className="lista-general">Peso del juego: 40GB</li>
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
