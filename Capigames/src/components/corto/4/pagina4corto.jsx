import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
// fotos
import beforeYourEyes from "../../../public/corto/4/before-your-eyes.jpg"
import bound from "../../../public/corto/4/Bound.jpg"
import enderLilies from "../../../public/corto/4/ender-lilies.jpg"
import maquette from "../../../public/corto/4/maquette.avif"
import oneshot from "../../../public/corto/4/oneshot.png"
import theBradwellConspiration from "../../../public/corto/4/the-bradwell-conspiracy.jpg"
import theMagicCircle from "../../../public/corto/4/the-magic-circle.jpg"
import theRedStringsClub from "../../../public/corto/4/the-red-strings-club.jpg"
import theSuicideOfRachel from "../../../public/corto/4/the-suicide-of-rachel-foster.jpg"

export function Pagina4Corto() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={beforeYourEyes} alt="" className="image" />
                        <Link className="titulo"><h4>Before your eyes</h4></Link>
                    </div>
                    <div className="card">
                        <img src={bound} alt="" className="image" />
                        <Link className="titulo"><h4>Bound</h4></Link>
                    </div>
                    <div className="card">
                        <img src={enderLilies} alt="" className="image" />
                        <Link className="titulo"><h4>Ender Lilies</h4></Link>
                    </div>
                    <div className="card">
                        <img src={maquette} alt="" className="image" />
                        <Link className="titulo"><h4>Maquette</h4></Link>
                    </div>
                    <div className="card">
                        <img src={oneshot} alt="" className="image" />
                        <Link className="titulo"><h4>Oneshot</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theBradwellConspiration} alt="" className="image" />
                        <Link className="titulo"><h4>The bradwell conspiration</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theMagicCircle} alt="" className="image" />
                        <Link className="titulo"><h4>The magic Circle</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theRedStringsClub} alt="" className="image" />
                        <Link className="titulo"><h4>The red strings club</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theSuicideOfRachel} alt="" className="image" />
                        <Link className="titulo"><h4>The suicide of Rachel Foster</h4></Link>
                    </div>
                </div>
            </div>

            <div className="paginas">
                <NavLink className="pagina" to={"/corto/1"}>1</NavLink>
                <NavLink className="pagina" to={"/corto/2"}>2</NavLink>
                <NavLink className="pagina" to={"/corto/3"}>3</NavLink>
                <NavLink className="pagina" to={"/corto/4"}>4</NavLink>
            </div>
        </>
    )
}