import { Inicio } from "../../Pagina inicial/inicio";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "../../Cards/card.css";
import "../../boton-pagina/boton.css";
import celeste from "../../../public/2D/1/celeste.jpg";
import holllowKnight from "../../../public/2D/1/hollow-knight.jpg";
import hotline2 from "../../../public/2D/1/hotline-miami-II.jpg";
import hotline from "../../../public/2D/1/hotline-miami.png";
import mario from "../../../public/2D/1/mario.jpg";
import silksong from "../../../public/2D/1/silksong.jpg";
import stardew from "../../../public/2D/1/stardew.jpg";
import terraria from "../../../public/2D/1/terraria.jpg";
import undertale from "../../../public/2D/1/undertale.jpg";

export function SD1() {
  return (
    <>
      <Inicio />
      <div className="container">
        <div className="grid">
          <div className="card">
            <img src={celeste} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/celeste"}>
              <h4>Celeste</h4>
            </Link>
          </div>
          <div className="card">
            <img src={holllowKnight} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/hollow-knight"}>
              <h4>Hollow Knight</h4>
            </Link>
          </div>
          <div className="card">
            <img src={hotline2} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/hotline-miami-2"}>
              <h4>Hotline Miami II</h4>
            </Link>
          </div>
          <div className="card">
            <img src={hotline} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/hotline-miami"}>
              <h4>Hotline Miami</h4>
            </Link>
          </div>
          <div className="card">
            <img src={mario} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/mario-bros"}>
              <h4>Mario Bros</h4>
            </Link>
          </div>
          <div className="card">
            <img src={silksong} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/silksong"}>
              <h4>Silksong</h4>
            </Link>
          </div>
          <div className="card">
            <img src={stardew} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/stardew-valley"}>
              <h4>Stardew Valley</h4>
            </Link>
          </div>
          <div className="card">
            <img src={terraria} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/terraria"}>
              <h4>Terraria</h4>
            </Link>
          </div>
          <div className="card">
            <img src={undertale} alt="" className="image" />
            <Link className="titulo" to={"/2D/1/undertale"}>
              <h4>Undertale</h4>
            </Link>
          </div>
        </div>
      </div>
      <div className="paginas">
        <NavLink className="pagina" to={"/2D/1"}>
          1
        </NavLink>
        <NavLink className="pagina" to={"/2D/2"}>
          2
        </NavLink>
        <NavLink className="pagina" to={"/2D/3"}>
          3
        </NavLink>
        <NavLink className="pagina" to={"/2D/4"}>
          4
        </NavLink>
      </div>
    </>
  );
}
