import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//fotos
import battlefield from "../../../public/primera-persona/4/battlefield.jpg"
import wolfestein from "../../../public/primera-persona/4/wolfestein.jpg"
import callOfDuty4 from "../../../public/primera-persona/4/call-of-duty-4.jpg"
import csgo from "../../../public/primera-persona/4/csgo.jpg"
import doom1963 from "../../../public/primera-persona/4/doom-1963.jpg"
import farCry3 from "../../../public/primera-persona/4/far-cry-3.jpg"
import haloCombatEnvolved from "../../../public/primera-persona/4/halo-combat-envolved.jpg"
import metroLastNight from "../../../public/primera-persona/4/metro-last-night.jpg"
import QuakePrincipal from "../../../public/primera-persona/4/Quake-Principal.jpg"

export function Pagina4primerapersona() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={battlefield} alt="" className="image" />
                        <Link className="titulo"><h4>Battlefield</h4></Link>
                    </div>
                    <div className="card">
                        <img src={wolfestein} alt="" className="image" />
                        <Link className="titulo"><h4>Wolfestein</h4></Link>
                    </div>
                    <div className="card">
                        <img src={callOfDuty4} alt="" className="image" />
                        <Link className="titulo"><h4>Call Of Duty 4</h4></Link>
                    </div>
                    <div className="card">
                        <img src={csgo} alt="" className="image" />
                        <Link className="titulo"><h4>CSGO</h4></Link>
                    </div>
                    <div className="card">
                        <img src={doom1963} alt="" className="image" />
                        <Link className="titulo"><h4>Doom 1963</h4></Link>
                    </div>
                    <div className="card">
                        <img src={farCry3} alt="" className="image" />
                        <Link className="titulo"><h4>Far cry 3</h4></Link>
                    </div>
                    <div className="card">
                        <img src={haloCombatEnvolved} alt="" className="image" />
                        <Link className="titulo"><h4>Halo combat envolved</h4></Link>
                    </div>
                    <div className="card">
                        <img src={metroLastNight} alt="" className="image" />
                        <Link className="titulo"><h4>Metro last night</h4></Link>
                    </div>
                    <div className="card">
                        <img src={QuakePrincipal} alt="" className="image" />
                        <Link className="titulo"><h4>Quake principal</h4></Link>
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