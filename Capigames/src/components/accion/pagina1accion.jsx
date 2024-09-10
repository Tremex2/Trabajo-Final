import { Inicio } from "../Pagina inicial/inicio";
import "../Cards/card.css"
import { Link } from "react-router-dom";
import jsonData from "./juegosAccion1.json"
import grand from "../../public/images/gta5.jpg"
import ultrakill from "../../public/images/ultrakill.webp"
import tlou2 from "../../public/images/the-last-of-us-2.jpg"
import doom from "../../public/images/doom.jpg"
import tlou from "../../public/images/the-last-of-us.jpg"
import cyberpunk from "../../public/images/cyberpunk.jpg"
import codevein from "../../public/images/CodeVein.jpg"
import darksouls from "../../public/images/dark-souls.jpg"
import rdr2 from "../../public/images/rdr2.jpg"
export function Pagina1Accion() {
    const gta = jsonData.GTA 
    return(
        <>
        <Inicio></Inicio>
        <div className="container">
        <div className="grid">
            <div className="card">
            <img src={rdr2} alt="" className="image" />
            <div className="titulo"><h4>Red Dead Redemption II</h4></div>
            </div>
            <div className="card">
            <img src={codevein} alt="" className="image" />
            <div className="titulo"><h4>CodeVein</h4></div>
            </div>
            <div className="card">
            <img src={cyberpunk} alt="" className="image" />
            <div className="titulo"><h4>cyberpunk 2077</h4></div>
            </div>
            <div className="card">
            <img src={darksouls} alt="" className="image" />
            <div className="titulo"><h4>dark souls</h4></div>
            </div>
            <div className="card">
            <img src={doom} alt="" className="image" />
            <div className="titulo"><h4>doom eternal</h4></div>
            </div>
            <div className="card">
            <img src={tlou} alt="" className="image" />
            <div className="titulo"><h4>the last of us</h4></div>
            </div>
            <div className="card">
            <img src={tlou2} alt="" className="image" />
            <div className="titulo"><h4>the last of us 2</h4></div>
            </div>
            <div className="card">
            <img src={ultrakill} alt="" className="image" />
            <div className="titulo"><h4>Ultrakill</h4></div>
            </div>
            <div className="card">
            <img src={grand} alt="no image" className="image"/>
            <div className="titulo"><h4>{gta.titulo}</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}