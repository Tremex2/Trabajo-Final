import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import construccion from "../../../public/construccion.jpg"
import { Link } from "react-router-dom";
export function Pagina3primerapersona() {
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
        <Link className="active pagina" to={"/accion/1"}>1</Link>
        <Link className="active pagina" to={"/accion/2"}>2</Link>
        <Link className="active pagina" to={"/accion/3"}>3</Link>
        <Link className="active pagina" to={"/accion/4"}>4</Link>
        </div>
        </>
    )
}