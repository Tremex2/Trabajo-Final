import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
//fotos
import b4d from "../../../public/terror/3/back-4-blood.jpg"
import callOfCuthulhu from "../../../public/terror/3/call-of-cthulhu.jpg"
import condemned from "../../../public/terror/3/condemned.jpg"
import darkestDungeon from "../../../public/terror/3/darkest-dungeon.jpg"
import theForest from "../../../public/terror/3/the-forest.jpg"
import theLastDoor from "../../../public/terror/3/the-last-door.jpg"
import theVanishing from "../../../public/terror/3/the-vanishing.jpg"
import visage from "../../../public/terror/3/visage.jpg"
import carrion from "../../../public/terror/3/carrion.jpg"

export function Pagina3terror() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={b4d} alt="" className="image" />
                        <Link className="titulo"><h4>back 4 blood</h4></Link>
                    </div>
                    <div className="card">
                        <img src={callOfCuthulhu} alt="" className="image" />
                        <Link className="titulo"><h4>Call of cuthulhu</h4></Link>
                    </div>
                    <div className="card">
                        <img src={condemned} alt="" className="image" />
                        <Link className="titulo"><h4>Condemned</h4></Link>
                    </div>
                    <div className="card">
                        <img src={darkestDungeon} alt="" className="image" />
                        <Link className="titulo"><h4>Darkest Dungeon</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theForest} alt="" className="image" />
                        <Link className="titulo"><h4>The forest</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theLastDoor} alt="" className="image" />
                        <Link className="titulo"><h4>The last door</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theVanishing} alt="" className="image" />
                        <Link className="titulo"><h4>The vanishing Ethan Carter</h4></Link>
                    </div>
                    <div className="card">
                        <img src={visage} alt="" className="image" />
                        <Link className="titulo"><h4>Visage</h4></Link>
                    </div>
                    <div className="card">
                        <img src={carrion} alt="" className="image" />
                        <Link className="titulo"><h4>Carrion</h4></Link>
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