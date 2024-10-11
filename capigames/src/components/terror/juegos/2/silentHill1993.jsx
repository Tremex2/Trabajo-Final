import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/terror/juegos/2/silent hill 1/juegosilent-hill1-3.jpg";
import imagen2 from "../../../../public/terror/juegos/2/silent hill 1/juegosilent-hill1-2.jpg";
import imagen3 from "../../../../public/terror/juegos/2/silent hill 1/juegosilent-hill1-1.jpg";

export function SilentHill1993() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version:</li>
        <li className="lista-general">Idiomas: Inglés</li>
        <li className="lista-general">Fecha de salida:1999</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 7 de 32 bits
        </li>
        <li className="lista-general">
          Procesador: Intel Core i5-4440 / AMD Athlon 300GE
        </li>
        <li className="lista-general">Memoria: 4 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: NVIDIA GeForce GTX 1050 / Radeon RX 560
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
            <h1 className="letras-juegos">silent hill</h1>
            <div className="linea-recta-juegos"></div>
            <div className="espacio-sin-mas">
              {" "}
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
              Silent Hill es una franquicia japonesa de videojuegos de terror de
              supervivencia creada por Keiichiro Toyama, desarrollada y
              publicada por Konami, y publicada por su subsidiaria Konami
              Digital Entertainment. Los cuatro primeros videojuegos de terror
              de supervivencia de la serie
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
                        <li className="lista-general">Version:</li>
                        <li className="lista-general">Idiomas: Inglés</li>
                        <li className="lista-general">Fecha de salida:1999</li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 7 de 32 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Intel Core i5-4440 / AMD Athlon 300GE
                        </li>
                        <li className="lista-general">Memoria: 4 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: NVIDIA GeForce GTX 1050 / Radeon RX
                          560
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
                      <li className="lista-general">Peso del juego: 4GB</li>
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
