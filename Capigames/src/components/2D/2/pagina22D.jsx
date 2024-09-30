import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// fotos

import axiomVerge from "../../../public/2D/2/axiom-verge.jpg"
import cupheah from "../../../public/2D/2/cuphead.jpg"
import deadCells from "../../../public/2D/2/dead-cells.webp"
import enterTheGungeon from "../../../public/2D/2/enter-the-gungeon.jpg"
import hyperLightDrifter from "../../../public/2D/2/hyper-light-drifter.webp"
import limbo from "../../../public/2D/2/limbo.jpg"
import oriAndTheBlindForest from "../../../public/2D/2/ori-and-the-blind-forest.jpg"
import shovelKnight from "../../../public/2D/2/shovel-knight.jpg"
import superMeatBoy from "../../../public/2D/2/super-meat-boy.jpg"

export function Pagina22D() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={axiomVerge} alt="" className="image" />
                        <Link className="titulo"><h4>Axiom verge</h4></Link>
                    </div>
                    <div className="card">
                        <img src={cupheah} alt="" className="image" />
                        <Link className="titulo"><h4>Cuphead</h4></Link>
                    </div>
                    <div className="card">
                        <img src={deadCells} alt="" className="image" />
                        <Link className="titulo"><h4>Dead Cells</h4></Link>
                    </div>
                    <div className="card">
                        <img src={enterTheGungeon} alt="" className="image" />
                        <Link className="titulo"><h4>Enter the gungeon</h4></Link>
                    </div>
                    <div className="card">
                        <img src={hyperLightDrifter} alt="" className="image" />
                        <Link className="titulo"><h4>Hyper Light Drifter</h4></Link>
                    </div>
                    <div className="card">
                        <img src={limbo} alt="" className="image" />
                        <Link className="titulo"><h4>Limbo</h4></Link>
                    </div>
                    <div className="card">
                        <img src={oriAndTheBlindForest} alt="" className="image" />
                        <Link className="titulo"><h4>Ori and the blind forest</h4></Link>
                    </div>
                    <div className="card">
                        <img src={shovelKnight} alt="" className="image" />
                        <Link className="titulo"><h4>Shovel knight</h4></Link>
                    </div>
                    <div className="card">
                        <img src={superMeatBoy} alt="" className="image" />
                        <Link className="titulo"><h4>Super meat boy</h4></Link>
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