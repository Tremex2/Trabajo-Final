import { Inicio } from "../../Pagina inicial/inicio"
import { Link } from "react-router-dom"
import { NavLink } from "react-router-dom"
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import celeste from "../../../public/2D/celeste.jpg"
import holllowKnight from "../../../public/2D/hollow-knight.jpg"
import hotline2 from "../../../public/2D/hotline-miami-II.jpg"
import hotline from "../../../public/2D/hotline-miami.png"
import mario from "../../../public/2D/mario.jpg"
import silksong from "../../../public/2D/silksong.jpg"
import stardew from "../../../public/2D/stardew.jpg"
import terraria from "../../../public/2D/terraria.jpg"
import undertale from "../../../public/2D/undertale.jpg"

export function SD1() {
    return(
        <>
       <Inicio/>
       <div className="container">
        <div className="grid">
            <div className="card">
            <img src={celeste} alt="" className="image" />
            <Link className="titulo"><h4>Celeste</h4></Link>
            </div>
            <div className="card">
            <img src={holllowKnight} alt="" className="image" />
            <Link className="titulo"><h4>Hollow Knight</h4></Link>
            </div>
            <div className="card">
            <img src={hotline2} alt="" className="image" />
            <Link className="titulo"><h4>Hotline Miami II</h4></Link>
            </div>
            <div className="card">
            <img src={hotline} alt="" className="image" />
            <Link className="titulo"><h4>Hotline Miami</h4></Link>
            </div>
            <div className="card">
            <img src={mario} alt="" className="image" />
            <Link className="titulo"><h4>Mario Bros</h4></Link>
            </div>
            <div className="card">
            <img src={silksong} alt="" className="image" />
            <Link className="titulo"><h4>Silksong</h4></Link>
            </div>
            <div className="card">
            <img src={stardew} alt="" className="image" />
            <Link className="titulo"><h4>Stardew Valley</h4></Link>
            </div>
            <div className="card">
            <img src={terraria} alt="" className="image" />
            <Link className="titulo"><h4>Terraria</h4></Link>
            </div>
            <div className="card">
            <img src={undertale} alt="" className="image" />
            <Link className="titulo"><h4>Undertale</h4></Link>
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