import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css";
import "../../boton-pagina/boton.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//fotos
import guest7 from "../../../public/terror/2/7h-guest.jpg";
import ddlc from "../../../public/terror/2/ddlc.jpg";
import eternalDarkness from "../../../public/terror/2/eternal-darkness.jpg";
import fnaf1 from "../../../public/terror/2/five-nights-at-freddys.jpg";
import gabrielKnight from "../../../public/terror/2/gabriel-knight.jpg";
import helloNeighbor from "../../../public/terror/2/hello-neighbor.jpg";
import silentAlone from "../../../public/terror/2/silent-alone.jpg";
import silentHill from "../../../public/terror/2/silent-hill.jpg";
import untilDawn from "../../../public/terror/2/until-dawn.jpg";

export function Pagina2terror() {
  return (
    <>
      <Inicio></Inicio>
      <div className="container">
        <div className="grid">
          <div className="card">
            <img src={guest7} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/7h-guest"}>
              <h4>the 7th guest VR</h4>
            </Link>
          </div>
          <div className="card">
            <img src={ddlc} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/ddlc"}>
              <h4>doki doki literature club</h4>
            </Link>
          </div>
          <div className="card">
            <img src={eternalDarkness} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/eternal-darkness"}>
              <h4>eternal darkness</h4>
            </Link>
          </div>
          <div className="card">
            <img src={fnaf1} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/fnaf"}>
              <h4>five night´s at freddy´s</h4>
            </Link>
          </div>
          <div className="card">
            <img src={gabrielKnight} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/gabriel-knight"}>
              <h4>Gabriel Knight</h4>
            </Link>
          </div>
          <div className="card">
            <img src={helloNeighbor} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/hello-neighbor"}>
              <h4>Hello Neighbor</h4>
            </Link>
          </div>
          <div className="card">
            <img src={silentAlone} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/silent-alone"}>
              <h4>Silent Alone</h4>
            </Link>
          </div>
          <div className="card">
            <img src={silentHill} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/silent-hill-1993"}>
              <h4>Silent hill</h4>
            </Link>
          </div>
          <div className="card">
            <img src={untilDawn} alt="" className="image" />
            <Link className="titulo" to={"/terror/2/until-dawn"}>
              <h4>Until Dawn</h4>
            </Link>
          </div>
        </div>
      </div>

      <div className="paginas">
        <NavLink className="pagina" to={"/terror/1"}>
          1
        </NavLink>
        <NavLink className="pagina" to={"/terror/2"}>
          2
        </NavLink>
        <NavLink className="pagina" to={"/terror/3"}>
          3
        </NavLink>
        <NavLink className="pagina" to={"/terror/4"}>
          4
        </NavLink>
      </div>
    </>
  );
}
