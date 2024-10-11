import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/terror/juegos/1/amnesia/juegoamnesia1.jpg";
import imagen2 from "../../../../public/terror/juegos/1/amnesia/juegoamnesia2.jpg";
import imagen3 from "../../../../public/terror/juegos/1/amnesia/juegoamnesia3.jpg";

export function Amnesia() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version:octubre 2023</li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés, Alemán,
          Italiano, Ruso, Chino simplificado.
        </li>
        <li className="lista-general">Fecha de salida: 8 de sep de 2010</li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows XP / Vista / 7
        </li>
        <li className="lista-general">
          Procesador: 2 GHz - las CPUs de gama baja como Celeron o Duron
          necesitarán el doble de velocidad
        </li>
        <li className="lista-general">Memoria: 2 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: Radeon X1000 / GF 6 - Puede que los chipsets
          integrados y las tarjetas de gama muy baja no funcionen.
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
            <h1 className="letras-juegos">amnesia</h1>
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
              Amnesia: The Dark Descent es un juego de horror y supervivencia en
              primera persona. Un juego sobre la inmersión, el descubrimiento y
              la vida dentro de una pesadilla. Una experiencia que te helará la
              sangre. Vas tropezando por los estrechos pasillos cuando escuchas
              un grito en la lejanía. Se está acercando.
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
                        <li className="lista-general">Version:octubre 2023</li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán, Italiano, Ruso, Chino simplificado.
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 8 de sep de 2010
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows XP / Vista / 7
                        </li>
                        <li className="lista-general">
                          Procesador: 2 GHz - las CPUs de gama baja como Celeron
                          o Duron necesitarán el doble de velocidad
                        </li>
                        <li className="lista-general">Memoria: 2 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: Radeon X1000 / GF 6 - Puede que los
                          chipsets integrados y las tarjetas de gama muy baja no
                          funcionen.
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
                      <li className="lista-general">Peso del juego: 3GB</li>
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
