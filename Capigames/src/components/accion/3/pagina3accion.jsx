import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
//fotos
import bayonetta from "../../../public/images/3/bayonetta-2.jpg"
import borderlands from "../../../public/images/3/borderlands-3.jpg"
import dishonored2 from "../../../public/images/3/dishonored-2.jpg"
import dyingLight2 from "../../../public/images/3/dying-light-2.jpg"
import farCry6 from "../../../public/images/3/far-cry-6.jpg"
import jediFallenOrder from "../../../public/images/3/jedi-fallen-order.webp"
import residentEvilVillage from "../../../public/images/3/resident-evil-village.jpeg"
import shadowsOfWar from "../../../public/images/3/shadows-of-war.jpg"
import titanfall2 from "../../../public/images/3/titanfall-2.jpg"



export function Pagina3Accion() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={bayonetta} alt="" className="image" />
                        <Link className="titulo"><h4>Bayonetta 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={borderlands} alt="" className="image" />
                        <Link className="titulo"><h4>Borderlands 3</h4></Link>
                    </div>
                    <div className="card">
                        <img src={dishonored2} alt="" className="image" />
                        <Link className="titulo"><h4>Dishonored 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={dyingLight2} alt="" className="image" />
                        <Link className="titulo"><h4>Dying light 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={farCry6} alt="" className="image" />
                        <Link className="titulo"><h4>Far Cry 6</h4></Link>
                    </div>
                    <div className="card">
                        <img src={jediFallenOrder} alt="" className="image" />
                        <Link className="titulo"><h4>Jedi Fallen Order</h4></Link>
                    </div>
                    <div className="card">
                        <img src={residentEvilVillage} alt="" className="image" />
                        <Link className="titulo"><h4>Resident Evil Village</h4></Link>
                    </div>
                    <div className="card">
                        <img src={shadowsOfWar} alt="" className="image" />
                        <Link className="titulo"><h4>Shadows of war</h4></Link>
                    </div>
                    <div className="card">
                        <img src={titanfall2} alt="" className="image" />
                        <Link className="titulo"><h4>Titanfall 2</h4></Link>
                    </div>
                </div>
            </div>

            <div className="paginas">
                <NavLink className="pagina" to={"/accion/1"}>1</NavLink>
                <NavLink className="pagina" to={"/accion/2"}>2</NavLink>
                <NavLink className="pagina" to={"/accion/3"}>3</NavLink>
                <NavLink className="pagina" to={"/accion/4"}>4</NavLink>
            </div>
        </>
    )
}