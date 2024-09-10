import { NavLink } from "react-router-dom"
import "./inicio.css"

export function Inicio() {
    return(
        <>
        <div id="tags" className="tags">
            <div className="titulo" id="titulo">
                <h1>Tags</h1>
            </div>
            <nav className="caja-tags">
                <NavLink className="tag" to={"/accion/1"}>
                   <h2>Accion</h2>
                </NavLink>
                <NavLink className="tag" to={"/terror/1"}>
                <h2>terror</h2>
                </NavLink>
                <NavLink className="tag" to={"/primera-persona/1"}>
                 <h2>primera persona</h2>
                </NavLink>
                <NavLink className="tag" to={"/2D/1"}>
                  <h2>2D</h2>
                </NavLink>
                <NavLink className="tag" to={"/corto/1"}>
                   <h2>corto</h2>
                </NavLink>
            </nav>
        </div>
        </>
    )
}