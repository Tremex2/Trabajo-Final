import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//fotos
import callOfJuarezGunslinger from "../../../public/primera-persona/3/call-of-juarez-gunslinger.png"
import mirrorsEdge from "../../../public/primera-persona/3/mirrors-edge.jpg"
import portal1Featured from "../../../public/primera-persona/3/portal-1-featured.jpg"
import rage2 from "../../../public/primera-persona/3/rage 2.jpg"
import rainbowSixSiege from "../../../public/primera-persona/3/raibow-six-siege.jpg"
import seriousSam from "../../../public/primera-persona/3/serious sam.jpg"
import stalkerShadowChernobyl from "../../../public/primera-persona/3/stalker-shadow-chernobyl.jpg"
import systemSchock2 from "../../../public/primera-persona/3/system-shock-2.jpg"
import theOuterWordls from "../../../public/primera-persona/3/the-outer-wordls.jpg"

export function Pagina3primerapersona() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={callOfJuarezGunslinger} alt="" className="image" />
                        <Link className="titulo"><h4>Call of Juarez gunslinger</h4></Link>
                    </div>
                    <div className="card">
                        <img src={mirrorsEdge} alt="" className="image" />
                        <Link className="titulo"><h4>Mirrors edge</h4></Link>
                    </div>
                    <div className="card">
                        <img src={portal1Featured} alt="" className="image" />
                        <Link className="titulo"><h4>Portal 1</h4></Link>
                    </div>
                    <div className="card">
                        <img src={rage2} alt="" className="image" />
                        <Link className="titulo"><h4>Rage 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={rainbowSixSiege} alt="" className="image" />
                        <Link className="titulo"><h4>Rainbox Six Siege</h4></Link>
                    </div>
                    <div className="card">
                        <img src={seriousSam} alt="" className="image" />
                        <Link className="titulo"><h4>Serious Sam</h4></Link>
                    </div>
                    <div className="card">
                        <img src={stalkerShadowChernobyl} alt="" className="image" />
                        <Link className="titulo"><h4>Stalker shadow chernobyl</h4></Link>
                    </div>
                    <div className="card">
                        <img src={systemSchock2} alt="" className="image" />
                        <Link className="titulo"><h4>System shock 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theOuterWordls} alt="" className="image" />
                        <Link className="titulo"><h4>The outer wordls</h4></Link>
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