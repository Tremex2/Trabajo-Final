import { Inicio } from "../../Pagina inicial/inicio"
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import amnesia from "../../../public/terror/amnesia.webp"
import layersOfFear from "../../../public/terror/layers-of-fear.webp"
import littleNightmaresII from "../../../public/terror/little nightmares-II.jpg"
import littleNightmares from "../../../public/terror/little nightmares.jpg"
import outlastII from "../../../public/terror/outlast-II.jpg"
import outlast from "../../../public/terror/outlast.jpg"
import phasmophobia from "../../../public/terror/phasmophobia.jpg"
import silentHillII from "../../../public/terror/silent-hill-2.jpg"
import soma from "../../../public/terror/soma.jpg"



export function Terror1() {
    return(
        <>
       <Inicio/>
       <div className="container">
        <div className="grid">
            <div className="card">
            <img src={amnesia} alt="" className="image" />
            <div className="titulo"><h4>Amnesia</h4></div>
            </div>
            <div className="card">
            <img src={layersOfFear} alt="" className="image" />
            <div className="titulo"><h4></h4>Layers of fear</div>
            </div>
            <div className="card">
            <img src={littleNightmaresII} alt="" className="image" />
            <div className="titulo"><h4>Little nightmares II</h4></div>
            </div>
            <div className="card">
            <img src={littleNightmares} alt="" className="image" />
            <div className="titulo"><h4>Little nightmares</h4></div>
            </div>
            <div className="card">
            <img src={outlastII} alt="" className="image" />
            <div className="titulo"><h4>Outlast II</h4></div>
            </div>
            <div className="card">
            <img src={outlast} alt="" className="image" />
            <div className="titulo"><h4>Outlast</h4></div>
            </div>
            <div className="card">
            <img src={phasmophobia} alt="" className="image" />
            <div className="titulo"><h4>Phasmophobia</h4></div>
            </div>
            <div className="card">
            <img src={silentHillII} alt="" className="image" />
            <div className="titulo"><h4>Silent Hill II</h4></div>
            </div>
            <div className="card">
            <img src={soma} alt="" className="image" />
            <div className="titulo"><h4>SOMA</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}