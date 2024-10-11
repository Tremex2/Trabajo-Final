import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
//fotos
import bullets from "../../../public/images/2/bulletstorm.jpg"
import deathloop from "../../../public/images/2/deathloop.jpg"
import hitman3 from "../../../public/images/2/hitman-3.jpg"
import justcause4 from "../../../public/images/2/justcause4.jpg"
import madmax from "../../../public/images/2/madmax.jpg"
import mgsPM from "../../../public/images/2/metal-gear-solid-v-the-phantom-pain.webp"
import mortalshell from "../../../public/images/2/mortal-shell.jpg"
import remnant from "../../../public/images/2/remnant-from-the-ashes.jpg"
import wdL from "../../../public/images/2/watch-dogs-legion.jpg"

export function Pagina2Accion() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={bullets} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/bulletsstorm"}><h4>BulletsStorm</h4></Link>
                    </div>
                    <div className="card">
                        <img src={deathloop} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/deathloop"}><h4>deathloop</h4></Link>
                    </div>
                    <div className="card">
                        <img src={hitman3} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/hitman-3"}><h4>hitman 3</h4></Link>
                    </div>
                    <div className="card">
                        <img src={justcause4} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/just-cause-4"}><h4>just cause 4</h4></Link>
                    </div>
                    <div className="card">
                        <img src={madmax} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/madmax"}><h4>madmax</h4></Link>
                    </div>
                    <div className="card">
                        <img src={mgsPM} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/mgs-phantom-pain"}><h4>MGS phantom pain</h4></Link>
                    </div>
                    <div className="card">
                        <img src={mortalshell} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/mortal-shell"}><h4>mortal shell</h4></Link>
                    </div>
                    <div className="card">
                        <img src={remnant} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/remnant-from-the-ashes"}><h4>remnant from the ashes</h4></Link>
                    </div>
                    <div className="card">
                        <img src={wdL} alt="" className="image" />
                        <Link className="titulo" to={"/accion/2/watch-dogs-legion"}><h4>watch dogs legion</h4></Link>
                    </div>
                </div>
            </div>

            <div className="paginas">
                <NavLink className="pagina" to={"/accion/1"}>1</NavLink>
                <NavLink className="pagina" to={"/accion/2"}>2</NavLink>
                <NavLink className="pagina" to={"/accion/3"}>3</NavLink>
                <NavLink className="pagina" to={"/accion/4"}>4</NavLink>
            </div>
        </>
    )
}