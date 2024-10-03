import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import construccion from "../../../public/construccion.jpg"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export function Pagina22D() {
    return(
        <>
        <Inicio></Inicio>
        <div className="container">
        <div className="grid">
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
            <div className="card">
            <img src={construccion} alt="" className="image" />
            <Link className="titulo"><h4>no terminado</h4></Link>
            </div>
        </div>
        </div>
        
        <div className="paginas">
        <NavLink className="pagina" to={"/2D/1"}>1</NavLink>
        <NavLink className="pagina" to={"/2D/2"}>2</NavLink>
        <NavLink className="pagina" to={"/2D/3"}>3</NavLink>
        <NavLink className="pagina" to={"/2D/4"}>4</NavLink>
        </div>
        </>
    )
}