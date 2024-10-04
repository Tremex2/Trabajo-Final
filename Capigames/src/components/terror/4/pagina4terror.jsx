import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
//fotos
import clockTower from "../../../public/terror/4/clock-tower.jpg"
import goneHome from "../../../public/terror/4/gone-home.jpg"
import houseOfAshes from "../../../public/terror/4/house-of-ashes.jpg"
import sunlessSkies from "../../../public/terror/4/sunless-skies.jpg"
import theCatLady from "../../../public/terror/4/the-cat-lady.jpg"
import theSinkingCity from "../../../public/terror/4/the-sinking-city.jpg"
import yummeNikki from "../../../public/terror/4/yumme-nikki.jpg"
import blairWitch from "../../../public/terror/4/blair-witch.jpg"
import silenHill4 from "../../../public/terror/4/silent-hill-4.jpg"


export function Pagina4terror() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={clockTower} alt="" className="image" />
                        <Link className="titulo"><h4>Clock Tower</h4></Link>
                    </div>
                    <div className="card">
                        <img src={goneHome} alt="" className="image" />
                        <Link className="titulo"><h4>Gone Home</h4></Link>
                    </div>
                    <div className="card">
                        <img src={houseOfAshes} alt="" className="image" />
                        <Link className="titulo"><h4>House of ashes</h4></Link>
                    </div>
                    <div className="card">
                        <img src={sunlessSkies} alt="" className="image" />
                        <Link className="titulo"><h4>Sunless skies</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theCatLady} alt="" className="image" />
                        <Link className="titulo"><h4>the cat lady</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theSinkingCity} alt="" className="image" />
                        <Link className="titulo"><h4>the sinking city</h4></Link>
                    </div>
                    <div className="card">
                        <img src={yummeNikki} alt="" className="image" />
                        <Link className="titulo"><h4>yumme nikki</h4></Link>
                    </div>
                    <div className="card">
                        <img src={blairWitch} alt="" className="image" />
                        <Link className="titulo"><h4>Blair Witch</h4></Link>
                    </div>
                    <div className="card">
                        <img src={silenHill4} alt="" className="image" />
                        <Link className="titulo"><h4>Silent Hill 4</h4></Link>
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