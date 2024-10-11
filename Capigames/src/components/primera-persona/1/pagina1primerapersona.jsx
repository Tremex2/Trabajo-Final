import { Inicio } from "../../Pagina inicial/inicio";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../Cards/card.css";
import "../../boton-pagina/boton.css";
import bioshock from "../../../public/primera-persona/1/bioshock.jpg";
import dishonored from "../../../public/primera-persona/1/dishonored.jpg";
import dyingLight from "../../../public/primera-persona/1/dying-light.jpg";
import farCry from "../../../public/primera-persona/1/far-cry-5.jpg";
import halfLife from "../../../public/primera-persona/1/half-life-II.jpg";
import portalII from "../../../public/primera-persona/1/portal-II.avif";
import prey from "../../../public/primera-persona/1/prey.jpg";
import subnautica from "../../../public/primera-persona/1/subnautica.jpg";
import theEldersScroll from "../../../public/primera-persona/1/the-elders-scroll.jpg";

export function PrimeraPersona1() {
  return (
    <>
      <Inicio />
      <div className="container">
        <div className="grid">
          <div className="card">
            <img src={bioshock} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/bioshock"}>
              <h4>Bioshock</h4>
            </Link>
          </div>
          <div className="card">
            <img src={dishonored} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/dishonored"}>
              <h4>Dishonored</h4>
            </Link>
          </div>
          <div className="card">
            <img src={dyingLight} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/dying-light"}>
              <h4>Dying Light</h4>
            </Link>
          </div>
          <div className="card">
            <img src={farCry} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/far-cry-5"}>
              <h4>Far Cry</h4>
            </Link>
          </div>
          <div className="card">
            <img src={halfLife} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/half-life-2"}>
              <h4>Half Life 2</h4>
            </Link>
          </div>
          <div className="card">
            <img src={portalII} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/portal-2"}>
              <h4>Portal II</h4>
            </Link>
          </div>
          <div className="card">
            <img src={prey} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/prey"}>
              <h4>Prey</h4>
            </Link>
          </div>
          <div className="card">
            <img src={subnautica} alt="" className="image" />
            <Link className="titulo" to={"/primera-persona/1/subnautica"}>
              <h4>Subnautica</h4>
            </Link>
          </div>
          <div className="card">
            <img src={theEldersScroll} alt="" className="image" />
            <Link
              className="titulo"
              to={"/primera-persona/1/the-elders-scroll-skyrim"}
            >
              <h4>The elders scroll V: Skyrim</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="paginas">
        <NavLink className="pagina" to={"/primera-persona/1"}>
          1
        </NavLink>
        <NavLink className="pagina" to={"/primera-persona/2"}>
          2
        </NavLink>
        <NavLink className="pagina" to={"/primera-persona/3"}>
          3
        </NavLink>
        <NavLink className="pagina" to={"/primera-persona/4"}>
          4
        </NavLink>
      </div>
    </>
  );
}
