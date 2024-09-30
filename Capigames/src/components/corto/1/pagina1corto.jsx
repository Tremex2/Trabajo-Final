import { Inicio } from "../../Pagina inicial/inicio"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import hike from "../../../public/corto/1/a-short-hike.png"
import firewach from "../../../public/corto/1/firewach.jpg"
import gris from "../../../public/corto/1/gris.webp"
import inside from "../../../public/corto/1/INSIDE.jpg"
import journey from "../../../public/corto/1/journey.jpg"
import oxenfree from "../../../public/corto/1/oxenfree.jpg"
import begginers from "../../../public/corto/1/the-begginers-guide.jpg"
import moon from "../../../public/corto/1/to-the-moon.jpg"
import finch from "../../../public/corto/1/what-remains-of-edith-finch.avif"

export function Corto1() {


    return (
        <>
            <Inicio />
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={hike} alt="" className="image" />
                        <Link className="titulo"><h4>A short hike</h4></Link>
                    </div>
                    <div className="card">
                        <img src={firewach} alt="" className="image" />
                        <Link className="titulo"><h4>Firewach</h4></Link>
                    </div>
                    <div className="card">
                        <img src={gris} alt="" className="image" />
                        <Link className="titulo"><h4>Gris</h4></Link>
                    </div>
                    <div className="card">
                        <img src={inside} alt="" className="image" />
                        <Link className="titulo"><h4>INSIDE</h4></Link>
                    </div>
                    <div className="card">
                        <img src={journey} alt="" className="image" />
                        <Link className="titulo"><h4>Journey</h4></Link>
                    </div>
                    <div className="card">
                        <img src={oxenfree} alt="" className="image" />
                        <Link className="titulo"><h4>Oxenfree</h4></Link>
                    </div>
                    <div className="card">
                        <img src={begginers} alt="" className="image" />
                        <Link className="titulo"><h4>The begginers guide</h4></Link>
                    </div>
                    <div className="card">
                        <img src={moon} alt="" className="image" />
                        <Link className="titulo"><h4>To the moon</h4></Link>
                    </div>
                    <div className="card">
                        <img src={finch} alt="" className="image" />
                        <Link className="titulo"><h4>What remains of edith finch</h4></Link>
                    </div>
                </div>
            </div>
            <div className="paginas">
                <NavLink className="pagina" to={"/corto/1"}>1</NavLink>
                <NavLink className="pagina" to={"/corto/2"}>2</NavLink>
                <NavLink className="pagina" to={"/corto/3"}>3</NavLink>
                <NavLink className="pagina" to={"/corto/4"}>4</NavLink>
            </div>
        </>
    )
}