import { Inicio } from "../../Pagina inicial/inicio"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"

import amnesia from "../../../public/terror/1/amnesia.webp"
import layersOfFear from "../../../public/terror/1/layers-of-fear.webp"
import littleNightmaresII from "../../../public/terror/1/little nightmares-II.jpg"
import littleNightmares from "../../../public/terror/1/little nightmares.jpg"
import outlastII from "../../../public/terror/1/outlast-II.jpg"
import outlast from "../../../public/terror/1/outlast.jpg"
import phasmophobia from "../../../public/terror/1/phasmophobia.jpg"
import silentHillII from "../../../public/terror/1/silent-hill-2.jpg"
import soma from "../../../public/terror/1/soma.jpg"



export function Terror1() {
    return (
        <>
            <Inicio />
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={amnesia} alt="" className="image" />
                        <Link className="titulo"><h4>Amnesia</h4></Link>
                    </div>
                    <div className="card">
                        <img src={layersOfFear} alt="" className="image" />
                        <Link className="titulo"><h4>Layers of fear</h4></Link>
                    </div>
                    <div className="card">
                        <img src={littleNightmaresII} alt="" className="image" />
                        <Link className="titulo"><h4>Little nightmares II</h4></Link>
                    </div>
                    <div className="card">
                        <img src={littleNightmares} alt="" className="image" />
                        <Link className="titulo"><h4>Little nightmares</h4></Link>
                    </div>
                    <div className="card">
                        <img src={outlastII} alt="" className="image" />
                        <Link className="titulo"><h4>Outlast II</h4></Link>
                    </div>
                    <div className="card">
                        <img src={outlast} alt="" className="image" />
                        <Link className="titulo"><h4>Outlast</h4></Link>
                    </div>
                    <div className="card">
                        <img src={phasmophobia} alt="" className="image" />
                        <Link className="titulo"><h4>Phasmophobia</h4></Link>
                    </div>
                    <div className="card">
                        <img src={silentHillII} alt="" className="image" />
                        <Link className="titulo"><h4>Silent Hill II</h4></Link>
                    </div>
                    <div className="card">
                        <img src={soma} alt="" className="image" />
                        <Link className="titulo"><h4>SOMA</h4></Link>
                    </div>
                </div>
            </div>
            <div className="paginas">
                <NavLink className="pagina" to={"/terror/1"}>1</NavLink>
                <NavLink className="pagina" to={"/terror/2"}>2</NavLink>
                <NavLink className="pagina" to={"/terror/3"}>3</NavLink>
                <NavLink className="pagina" to={"/terror/4"}>4</NavLink>
            </div>
        </>
    )
}