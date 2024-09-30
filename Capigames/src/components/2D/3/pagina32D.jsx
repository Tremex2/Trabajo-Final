import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// fotos
import braid from "../../../public/2D/3/braid.jpg"
import childOfLight from "../../../public/2D/3/child-of-light.jpg"
import guacamelee from "../../../public/2D/3/guacamelee!.avif"
import markOfTheNinja from "../../../public/2D/3/mark-of-the-ninja.webp"
import owlboy from "../../../public/2D/3/owlboy.jpg"
import rogueLegacy2 from "../../../public/2D/3/rogue-legacy-2.jpg"
import saltAndTheSectuary from "../../../public/2D/3/salt-and-sanctuary.jpg"
import spelunky from "../../../public/2D/3/spelunky.avif"
import theMessenger from "../../../public/2D/3/the-messenger.jpg"

export function Pagina32D() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={braid} alt="" className="image" />
                        <Link className="titulo"><h4>Braid</h4></Link>
                    </div>
                    <div className="card">
                        <img src={childOfLight} alt="" className="image" />
                        <Link className="titulo"><h4>child of the light</h4></Link>
                    </div>
                    <div className="card">
                        <img src={guacamelee} alt="" className="image" />
                        <Link className="titulo"><h4>guacamelee!</h4></Link>
                    </div>
                    <div className="card">
                        <img src={markOfTheNinja} alt="" className="image" />
                        <Link className="titulo"><h4>Mark of the ninja</h4></Link>
                    </div>
                    <div className="card">
                        <img src={owlboy} alt="" className="image" />
                        <Link className="titulo"><h4>Owlboy</h4></Link>
                    </div>
                    <div className="card">
                        <img src={rogueLegacy2} alt="" className="image" />
                        <Link className="titulo"><h4>rogue legacy 2</h4></Link>
                    </div>
                    <div className="card">
                        <img src={saltAndTheSectuary} alt="" className="image" />
                        <Link className="titulo"><h4>salt and the sectuary</h4></Link>
                    </div>
                    <div className="card">
                        <img src={spelunky} alt="" className="image" />
                        <Link className="titulo"><h4>spelunky</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theMessenger} alt="" className="image" />
                        <Link className="titulo"><h4>The messenger</h4></Link>
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