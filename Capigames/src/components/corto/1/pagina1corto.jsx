import { Inicio } from "../../Pagina inicial/inicio"
import "../../Cards/card.css"
import hike from "../../../public/corto/a-short-hike.png"
import firewach from "../../../public/corto/firewach.jpg" 
import gris from "../../../public/corto/gris.webp"
import inside from "../../../public/corto/INSIDE.jpg"
import journey  from "../../../public/corto/journey.jpg"
import oxenfree from "../../../public/corto/oxenfree.jpg"
import begginers from "../../../public/corto/the-begginers-guide.jpg"
import moon from "../../../public/corto/to-the-moon.jpg"
import finch from "../../../public/corto/what-remains-of-edith-finch.avif"

export function Corto1() {
    
    
    return(
        <>
       <Inicio/>
       <div className="container">
        <div className="grid">
            <div className="card">
            <img src={hike} alt="" className="image" />
            <div className="titulo"><h4>A short hike</h4></div>
            </div>
            <div className="card">
            <img src={firewach} alt="" className="image" />
            <div className="titulo"><h4>Firewach</h4></div>
            </div>
            <div className="card">
            <img src={gris} alt="" className="image" />
            <div className="titulo"><h4>Gris</h4></div>
            </div>
            <div className="card">
            <img src={inside} alt="" className="image" />
            <div className="titulo"><h4>INSIDE</h4></div>
            </div>
            <div className="card">
            <img src={journey} alt="" className="image" />
            <div className="titulo"><h4>Journey</h4></div>
            </div>
            <div className="card">
            <img src={oxenfree} alt="" className="image" />
            <div className="titulo"><h4>Oxenfree</h4></div>
            </div>
            <div className="card">
            <img src={begginers} alt="" className="image" />
            <div className="titulo"><h4>The begginers guide</h4></div>
            </div>
            <div className="card">
            <img src={moon} alt="" className="image" />
            <div className="titulo"><h4>To the moon</h4></div>
            </div>
            <div className="card">
            <img src={finch} alt="" className="image" />
            <div className="titulo"><h4>What remains of edith finch</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}