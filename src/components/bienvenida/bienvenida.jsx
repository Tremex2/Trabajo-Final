import { Inicio } from "../Pagina inicial/inicio";
import { Link } from "react-router-dom";
import capi from "../../public/capigames.jpg";
import titulo from "../../public/capititulo.png";
import "./bienvenida.css";
export function Bienvenida() {
  return (
    <>
      <Inicio />
      <div className="div-padre">
        <div className="bienvenida-titulo">
          <h1>¡Bienvenido a Capigames!</h1>
          <h2>
            Con los tags que ves arriba puedes desplazarte en nuestro catálogo.
            <br />
            ¡Explora y encuentra tu próximo juego favorito!
          </h2>
          <div className="imagen-bienvenida">
            <img src={capi} alt="" id="capigames" />
          </div>
        </div>
        <div className="recomen">
          <h2>Elegidos por los creadores</h2>
          <div className="recomenjuegos4">
            <div className="juegocreador" id="juegocreador1">
              <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
                <h2>red dead redemption 2</h2>
              </Link>
            </div>
            <div className="juegocreador" id="juegocreador2">
              <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
                <h2>oneshot</h2>
              </Link>
            </div>
            <div className="juegocreador" id="juegocreador3">
              <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
                <h2>hollow knight</h2>
              </Link>
            </div>
            <div className="juegocreador" id="juegocreador4">
              <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
                <h2>Bioshock</h2>
              </Link>
            </div>
            <div className="juegocreador" id="juegocreador5">
              <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
                <h2>subnautica</h2>
              </Link>
            </div>
          </div>
        </div>
        <div className="los-mas-descargados">
          <h2>Los más descargados</h2>
          <div className="juegocreador" id="los-mas-descargados-1">
            <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
              <h2>metro last light</h2>
            </Link>
          </div>
          <div className="juegocreador" id="los-mas-descargados-2">
            <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
              <h2>cyberpunk 2077</h2>
            </Link>
          </div>
          <div className="juegocreador" id="los-mas-descargados-3">
            <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
              <h2>ghost of tsushima</h2>
            </Link>
          </div>
          <div className="juegocreador" id="los-mas-descargados-4">
            <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
              <h2>plasmophobia</h2>
            </Link>
          </div>
          <div className="juegocreador" id="los-mas-descargados-5">
            <Link className="linkjuegosinicio1" to={"/accion/1/rdr2"}>
              <h2>god of war</h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
