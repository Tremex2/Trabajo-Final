import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import jsonData from "./juegosAccion1.json"
import grand from "../../../public/images/gta5.jpg"
import ultrakill from "../../../public/images/ultrakill.webp"
import tlou2 from "../../../public/images/the-last-of-us-2.jpg"
import doom from "../../../public/images/doom.jpg"
import tlou from "../../../public/images/the-last-of-us.jpg"
import cyberpunk from "../../../public/images/cyberpunk.jpg"
import codevein from "../../../public/images/CodeVein.jpg"
import darksouls from "../../../public/images/dark-souls.jpg"
import rdr2 from "../../../public/images/rdr2.jpg"
export function Pagina1Accion() {
    const gta = jsonData.GTA 
    return(
        <>
        <Inicio></Inicio>
        <div className="container">
        <div className="grid">
            <div className="card">
            <img src={rdr2} alt="" className="image" />
            <Link className="titulo"><h4>Red Dead Redemption II</h4></Link>
            </div>
            <div className="card">
            <img src={codevein} alt="" className="image" />
            <Link className="titulo"><h4>CodeVein</h4></Link>
            </div>
            <div className="card">
            <img src={cyberpunk} alt="" className="image" />
            <Link className="titulo"><h4>Cyberpunk 2077</h4></Link>
            </div>
            <div className="card">
            <img src={darksouls} alt="" className="image" />
            <Link className="titulo"><h4>Dark souls</h4></Link>
            </div>
            <div className="card">
            <img src={doom} alt="" className="image" />
            <Link className="titulo"><h4>Doom eternal</h4></Link>
            </div>
            <div className="card">
            <img src={tlou} alt="" className="image" />
            <Link className="titulo"><h4>The last of us</h4></Link>
            </div>
            <div className="card">
            <img src={tlou2} alt="" className="image" />
            <Link className="titulo"><h4>The last of us II</h4></Link>
            </div>
            <div className="card">
            <img src={ultrakill} alt="" className="image" />
            <Link className="titulo"><h4>Ultrakill</h4></Link>
            </div>
            <div className="card">
            <img src={grand} alt="no image" className="image"/>
            <Link className="titulo"><h4>{gta.titulo}</h4></Link>
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