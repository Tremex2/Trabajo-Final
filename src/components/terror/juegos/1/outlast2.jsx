import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/terror/juegos/1/outlast 2/juegooutlast2-1.jpg";
import imagen2 from "../../../../public/terror/juegos/1/outlast 2/juegooutlast2-2.jpg";
import imagen3 from "../../../../public/terror/juegos/1/outlast 2/juegooutlast2-3.jpg";

export function Outlast2() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: marzo de 2018</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (España), Francés, Alemán,polaco, Italiano,
          Portugués (Brasil), Ruso, Chino simplificado y Japonés
        </li>
        <li className="lista-general">Fecha de salida: 25 ABR 2017</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows Vista / 7 / 8 / 10, 64-bits
        </li>
        <li className="lista-general">Procesador: Intel Core i5</li>
        <li className="lista-general">Memoria: 8 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: 1.5GB VRAM, NVIDIA Geforce GTX 660 / ATI Radeon HD
          7850
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
            <h1 className="letras-juegos">outlast 2</h1>
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
              En Outlast 2 conocerás a Sullivan Knoth y sus seguidores, que
              dejaron atrás nuestro cruel mundo para fundar Temple Gate, un
              pueblo situado en tierra salvaje, alejado de la civilización.
              Knoth y su rebaño se preparan para las tribulaciones del fin de
              los tiempos y tú te encuentras en el ojo del huracán.
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
                          Version: marzo de 2018
                        </li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (España), Francés,
                          Alemán,polaco, Italiano, Portugués (Brasil), Ruso,
                          Chino simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 25 ABR 2017
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows Vista / 7 / 8 / 10, 64-bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i5
                        </li>
                        <li className="lista-general">Memoria: 8 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: 1.5GB VRAM, NVIDIA Geforce GTX 660 /
                          ATI Radeon HD 7850
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
                      <li className="lista-general">Peso del juego: 30GB</li>
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
