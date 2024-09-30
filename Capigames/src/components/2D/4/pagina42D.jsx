import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
//fotos

import blasphemous from "../../../public/2D/4/blasphemous.jpg"
import broforce from "../../../public/2D/4/broforce.png"
import caveHistory from "../../../public/2D/4/cave-story.jpg"
import iconoClasts from "../../../public/2D/4/iconoclasts.avif"
import katanaZero from "../../../public/2D/4/katana-zero.jpg"
import nightInTheWoods from "../../../public/2D/4/night-in-the-woods.jpg"
import riskOfRain from "../../../public/2D/4/risk-of-rain.jpg"
import slainBackFromHell from "../../../public/2D/4/slain-back-from-hell.jpg"
import treamWordlDig2 from "../../../public/2D/4/stream-wordl-dig-2.jpg"

export function Pagina42D() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={blasphemous} alt="" className="image" />
                        <Link className="titulo"><h4>Blasphemous</h4></Link>
                    </div>
                    <div className="card">
                        <img src={broforce} alt="" className="image" />
                        <Link className="titulo"><h4>Broforce</h4></Link>
                    </div>
                    <div className="card">
                        <img src={caveHistory} alt="" className="image" />
                        <Link className="titulo"><h4>Cave History</h4></Link>
                    </div>
                    <div className="card">
                        <img src={iconoClasts} alt="" className="image" />
                        <Link className="titulo"><h4>Iconoclasts</h4></Link>
                    </div>
                    <div className="card">
                        <img src={katanaZero} alt="" className="image" />
                        <Link className="titulo"><h4>Katana Zero</h4></Link>
                    </div>
                    <div className="card">
                        <img src={nightInTheWoods} alt="" className="image" />
                        <Link className="titulo"><h4>Night in the woods</h4></Link>
                    </div>
                    <div className="card">
                        <img src={riskOfRain} alt="" className="image" />
                        <Link className="titulo"><h4>Risk of rain</h4></Link>
                    </div>
                    <div className="card">
                        <img src={slainBackFromHell} alt="" className="image" />
                        <Link className="titulo"><h4>Slain back from hell</h4></Link>
                    </div>
                    <div className="card">
                        <img src={treamWordlDig2} alt="" className="image" />
                        <Link className="titulo"><h4>Stream Wordl Dig 2</h4></Link>
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