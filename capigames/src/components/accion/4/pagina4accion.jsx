import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// fotos
import assasinsCreed from "../../../public/images/4/assassins-creed-valhalla.jpg"
import bloodborne from "../../../public/images/4/bloodborne.png"
import control from "../../../public/images/4/control.jpg"
import devilMayCry5 from "../../../public/images/4/devil-may-cry-5.jpg"
import ghostOfTushima from "../../../public/images/4/ghost-of-tushima.jpg"
import godOfWar2018 from "../../../public/images/4/god-of-war-2018.jpg"
import horizonZeroDawn from "../../../public/images/4/horizon-zero-dawn.jpg"
import nioh2 from "../../../public/images/4/nioh-2.jpg"
import sekiroShadowsDieTwice from "../../../public/images/4/sekiro-shadows-die-twice.jpg"

export function Pagina4accion() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={assasinsCreed} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/assassins-creed-valhalla"}><h4>Assassins Creed Valhalla</h4></Link>
                    </div>
                    <div className="card">
                        <img src={bloodborne} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/bloodborne"}><h4>bloodborne</h4></Link>
                    </div>
                    <div className="card">
                        <img src={control} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/control"}><h4>Control</h4></Link>
                    </div>
                    <div className="card">
                        <img src={devilMayCry5} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/devil-may-cry-5"}><h4>Devil May Cry 5</h4></Link>
                    </div>
                    <div className="card">
                        <img src={ghostOfTushima} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/ghost-of-tushima"}><h4>Ghost of Tushima</h4></Link>
                    </div>
                    <div className="card">
                        <img src={godOfWar2018} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/god-of-war-2018"}><h4>God of war 2018</h4></Link>
                    </div>
                    <div className="card">
                        <img src={horizonZeroDawn} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/horizon-zero-dawn"}><h4>Horizon Zero Dawn</h4></Link>
                    </div>
                    <div className="card">
                        <img src={nioh2} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/nioh-2"}><h4>Nioh 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={sekiroShadowsDieTwice} alt="" className="image" />
                        <Link className="titulo" to={"/accion/4/sekiro-shadows-die-twice"}><h4>Sekiro shadows die twice</h4></Link>
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