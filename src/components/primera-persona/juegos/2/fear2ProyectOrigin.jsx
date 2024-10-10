import "../../../juegos-css/juegos.css";
import { useState } from "react";
import mediafire from "../../../../public/links de descarga/mediafire.webp";
import mega from "../../../../public/links de descarga/mega.png";
import pixelDrain from "../../../../public/links de descarga/pixeldrain.png";
import ImagenCambiable from "../../../carrousel-de-fotos/carrousel";
import imagen1 from "../../../../public/primera-persona/juegos/2/f.e.a.r 2/jf.e.a.r 2-1.jpg";
import imagen2 from "../../../../public/primera-persona/juegos/2/f.e.a.r 2/jf.e.a.r 2-2.jpg";
import imagen3 from "../../../../public/primera-persona/juegos/2/f.e.a.r 2/jf.e.a.r 2-3.jpg";

export function Fear2ProyectOrigin() {
  const [contenido, setContenido] = useState(
    <div>
      <ul className="">
        <li className="lista-general">Version: </li>
        <li className="lista-general">
          Idiomas: Inglés, Español (Latinoamérica y España), Francés,
          Alemán,polaco, Italiano, Ruso, Chino simplificado y Japonés
        </li>
        <li className="lista-general">
          Fecha de salida: 12 de febrero de 2009
        </li>
      </ul>
      <ul>
        <li className="lista-general">Requisitos</li>
        <li className="lista-general">
          Sistema operativo: Windows 10 de 64 bits
        </li>
        <li className="lista-general">
          Procesador: Procesador Core 2 Duo 2.2GHz familia/Athlon 64 X2 4400+
          (necesario para MP host)
        </li>
        <li className="lista-general">Memoria: 2 GB RAM</li>
        <li className="lista-general">
          Tarjeta de vídeo: Tarjeta gráfica totalmente compatible con DX9 con
          512MB (SM 3.0). NVidia® 8600 GTS o ATI® HD 2900 XT
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
            <h1 className="letras-juegos">F.E.A.R. 2: Project Origin</h1>
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
              Asume el papel del sargento Becket de las Fuerzas Especiales
              mientras tu misión de rutina se convierte rápidamente en una lucha
              por la supervivencia contra la ira de Alma Wade. A medida que el
              aterrador poder de Alma aumenta sin control, tu escuadrón se ve
              obligado a luchar en un paisaje apocalíptico en busca de pistas
              sobre cómo destruirla.
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
                        <li className="lista-general">Version: </li>
                        <li className="lista-general">
                          Idiomas: Inglés, Español (Latinoamérica y España),
                          Francés, Alemán,polaco, Italiano, Ruso, Chino
                          simplificado y Japonés
                        </li>
                        <li className="lista-general">
                          Fecha de salida: 12 de febrero de 2009
                        </li>
                      </ul>
                      <ul>
                        <li className="lista-general">Requisitos</li>
                        <li className="lista-general">
                          Sistema operativo: Windows 10 de 64 bits
                        </li>
                        <li className="lista-general">
                          Procesador: Procesador Core 2 Duo 2.2GHz
                          familia/Athlon 64 X2 4400+ (necesario para MP host)
                        </li>
                        <li className="lista-general">Memoria: 2 GB RAM</li>
                        <li className="lista-general">
                          Tarjeta de vídeo: Tarjeta gráfica totalmente
                          compatible con DX9 con 512MB (SM 3.0). NVidia® 8600
                          GTS o ATI® HD 2900 XT
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
                      <li className="lista-general">Peso del juego: 12GB</li>
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
