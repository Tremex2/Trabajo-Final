import { Inicio } from "../Pagina inicial/inicio"
import "../Cards/card.css"
import bioshock from "../../public/primera-persona/bioshock.jpg"
import dishonored from "../../public/primera-persona/dishonored.jpg"
import dyingLight from "../../public/primera-persona/dying-light.jpg"
import farCry from "../../public/primera-persona/far-cry-5.jpg"
import halfLife from "../../public/primera-persona/half-life-II.jpg"
import portalII from "../../public/primera-persona/portal-II.avif"
import prey from "../../public/primera-persona/prey.jpg"
import subnautica from "../../public/primera-persona/subnautica.jpg"
import theEldersScroll from "../../public/primera-persona/the-elders-scroll.jpg"


export function PrimeraPersona1() {
    return(
        <>
       <Inicio/>
       <div className="container">
        <div className="grid">
            <div className="card">
            <img src={bioshock} alt="" className="image" />
            <div className="titulo"><h4>Bioshock</h4></div>
            </div>
            <div className="card">
            <img src={dishonored} alt="" className="image" />
            <div className="titulo"><h4>Dishonored</h4></div>
            </div>
            <div className="card">
            <img src={dyingLight} alt="" className="image" />
            <div className="titulo"><h4>Dying Light</h4></div>
            </div>
            <div className="card">
            <img src={farCry} alt="" className="image" />
            <div className="titulo"><h4>Far Cry</h4></div>
            </div>
            <div className="card">
            <img src={halfLife} alt="" className="image" />
            <div className="titulo"><h4>Half Life 2</h4></div>
            </div>
            <div className="card">
            <img src={portalII} alt="" className="image" />
            <div className="titulo"><h4>Portal II</h4></div>
            </div>
            <div className="card">
            <img src={prey} alt="" className="image" />
            <div className="titulo"><h4>Prey</h4></div>
            </div>
            <div className="card">
            <img src={subnautica} alt="" className="image" />
            <div className="titulo"><h4>Subnautica</h4></div>
            </div>
            <div className="card">
            <img src={theEldersScroll} alt="" className="image" />
            <div className="titulo"><h4>The elders scroll V: Skyrim</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}