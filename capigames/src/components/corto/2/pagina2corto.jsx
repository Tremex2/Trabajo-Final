import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom"
// fotos
import abzu from "../../../public/corto/2/abzu.avif"
import dearEsther from "../../../public/corto/2/dear-esther.jpg"
import flower from "../../../public/corto/2/flower.avif"
import herStory from "../../../public/corto/2/her-story.jpg"
import sonutCountry from "../../../public/corto/2/sonut-country.avif"
import stanleyParable from "../../../public/corto/2/stanley-parable.jpg"
import tacoma from "../../../public/corto/2/tacoma.webp"
import theRoom from "../../../public/corto/2/the-room.png"
import theUnfinishedSwan from "../../../public/corto/2/the-unfinished-swan.jpg"

export function Pagina2Corto() {
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={abzu} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/abzu"}><h4>Abzu</h4></Link>
                    </div>
                    <div className="card">
                        <img src={dearEsther} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/dear-esther"}><h4>Dear Esther</h4></Link>
                    </div>
                    <div className="card">
                        <img src={flower} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/flower"}><h4>Flower</h4></Link>
                    </div>
                    <div className="card">
                        <img src={herStory} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/her-history"}><h4>Her story</h4></Link>
                    </div>
                    <div className="card">
                        <img src={sonutCountry} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/donut-country"}><h4>donut country</h4></Link>
                    </div>
                    <div className="card">
                        <img src={stanleyParable} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/stanley-parable"}><h4>Stanley parable</h4></Link>
                    </div>
                    <div className="card">
                        <img src={tacoma} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/tacoma"}><h4>Tacoma</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theRoom} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/the-room"}><h4>The Room</h4></Link>
                    </div>
                    <div className="card">
                        <img src={theUnfinishedSwan} alt="" className="image" />
                        <Link className="titulo" to={"/corto/2/the-unfinished-swan"}><h4>The unfinished swan</h4></Link>
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