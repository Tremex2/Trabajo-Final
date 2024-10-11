import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css";
import "../../boton-pagina/boton.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// fotos
import everybodyGoneToTheRapture from "../../../public/corto/3/everybodys-gone-to-the-rapture.jpg";
import maifoldGarden from "../../../public/corto/3/maifold-garden.jpg";
import observation from "../../../public/corto/3/observation.jpg";
import outerWild from "../../../public/corto/3/outer-wilds.jpg";
import superliminal from "../../../public/corto/3/superliminal.avif";
import tellingLies from "../../../public/corto/3/telling-lies.avif";
import theLastCampfire from "../../../public/corto/3/the-last-campfire.jpg";
import theWitness from "../../../public/corto/3/the-witness.jpg";
import virginia from "../../../public/corto/3/virginia.jpg";

export function Pagina3Corto() {
  return (
    <>
      <Inicio></Inicio>
      <div className="container">
        <div className="grid">
          <div className="card">
            <img src={everybodyGoneToTheRapture} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/everybody-is-gone"}>
              <h4>every body is gone</h4>
            </Link>
          </div>
          <div className="card">
            <img src={observation} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/observation"}>
              <h4>Observation</h4>
            </Link>
          </div>
          <div className="card">
            <img src={outerWild} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/outer-wild"}>
              <h4>Outer Wilds</h4>
            </Link>
          </div>
          <div className="card">
            <img src={superliminal} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/super-liminal"}>
              <h4>Super Liminal</h4>
            </Link>
          </div>
          <div className="card">
            <img src={tellingLies} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/telling-lies"}>
              <h4>Telling Lies</h4>
            </Link>
          </div>
          <div className="card">
            <img src={theLastCampfire} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/the-last-campfire"}>
              <h4>The last campfire</h4>
            </Link>
          </div>
          <div className="card">
            <img src={theWitness} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/the-witness"}>
              <h4>The witness</h4>
            </Link>
          </div>
          <div className="card">
            <img src={virginia} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/virginia"}>
              <h4>Virginia</h4>
            </Link>
          </div>
          <div className="card">
            <img src={maifoldGarden} alt="" className="image" />
            <Link className="titulo" to={"/corto/3/maifold-garden"}>
              <h4>maifold garden</h4>
            </Link>
          </div>
        </div>
      </div>

      <div className="paginas">
        <NavLink className="pagina" to={"/corto/1"}>
          1
        </NavLink>
        <NavLink className="pagina" to={"/corto/2"}>
          2
        </NavLink>
        <NavLink className="pagina" to={"/corto/3"}>
          3
        </NavLink>
        <NavLink className="pagina" to={"/corto/4"}>
          4
        </NavLink>
      </div>
    </>
  );
}
