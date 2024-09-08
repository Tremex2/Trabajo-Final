import { Inicio } from "../Pagina inicial/inicio";
import "../Cards/card.css"
import jsonData from "./juegosAccion1.json"
import "../"
export function Pagina1Accion() {
    const gta = jsonData.GTA 
    return(
        <>
        <Inicio></Inicio>
        <div className="container">
        <div className="grid">
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <div className="titulo"></div>
            </div>
            <div className="card">
            <img src="" alt="no image" />
            <div className="titulo"><h4>{gta.titulo}</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}