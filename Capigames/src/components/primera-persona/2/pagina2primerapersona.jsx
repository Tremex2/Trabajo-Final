import { Inicio } from "../../Pagina inicial/inicio";
import { NavLink } from "react-router-dom";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
//fotos
import apex from "../../../public/primera-persona/2/apex-legends.jpg"
import clideBarkersJericho from "../../../public/primera-persona/2/clide-barkers-jericho.jpg"
import crysis from "../../../public/primera-persona/2/crysis.jpg"
import crysis2 from "../../../public/primera-persona/2/crysis-2.jpg"
import crysis3 from "../../../public/primera-persona/2/crysis-3.jpg"
import tf2 from "../../../public/primera-persona/2/tf2.jpg"
import deusEx from "../../../public/primera-persona/2/deus-ex.jpg"
import escapeFromTarkov from "../../../public/primera-persona/2/escape-from-the-tarkov.jpg"
import fear2ProyectOrigin from "../../../public/primera-persona/2/fear-2-proyect-origin.jpg"


export function Pagina2primerapersona() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={apex} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/apex-legends"}><h4>Apex Legends</h4></Link>
                    </div>
                    <div className="card">
                        <img src={clideBarkersJericho} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/jericho"}><h4>Clide Barkers Jericho</h4></Link>
                    </div>
                    <div className="card">
                        <img src={crysis2} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/crysis-2"}><h4>Crysis 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={crysis} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/crysis"}><h4>Crysis</h4></Link>
                    </div>
                    <div className="card">
                        <img src={crysis3} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/crysis-3"}><h4>Crysis 3</h4></Link>
                    </div>
                    <div className="card">
                        <img src={deusEx} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/deus-ex"}><h4>Deus Ex</h4></Link>
                    </div>
                    <div className="card">
                        <img src={escapeFromTarkov} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/escape-from-tarkov"}><h4>Escape from tarkov</h4></Link>
                    </div>
                    <div className="card">
                        <img src={fear2ProyectOrigin} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/fear-2-proyect-origin"}><h4>Fear 2 proyect origin</h4></Link>
                    </div>
                    <div className="card">
                        <img src={tf2} alt="" className="image" />
                        <Link className="titulo" to={"/primera-persona/2/team-fortress-2"}><h4>Team Fortress 2</h4></Link>
                    </div>
                </div>
            </div>

            <div className="paginas">
                <NavLink className="pagina" to={"/primera-persona/1"}>1</NavLink>
                <NavLink className="pagina" to={"/primera-persona/2"}>2</NavLink>
                <NavLink className="pagina" to={"/primera-persona/3"}>3</NavLink>
                <NavLink className="pagina" to={"/primera-persona/4"}>4</NavLink>
            </div>
        </>
    )
}