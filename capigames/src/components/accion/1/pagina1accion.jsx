import { Inicio } from "../../Pagina inicial/inicio";
import "../../Cards/card.css"
import "../../boton-pagina/boton.css"
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import jsonData from "./juegosAccion1.json"
import grand from "../../../public/images/1/gta5.jpg"
import ultrakill from "../../../public/images/1/ultrakill.webp"
import tlou2 from "../../../public/images/1/the-last-of-us-2.jpg"
import doom from "../../../public/images/1/doom.jpg"
import tlou from "../../../public/images/1/the-last-of-us.jpg"
import cyberpunk from "../../../public/images/1/cyberpunk.jpg"
import codevein from "../../../public/images/1/CodeVein.jpg"
import darksouls from "../../../public/images/1/dark-souls.jpg"
import rdr2 from "../../../public/images/1/rdr2.jpg"
export function Pagina1Accion() {
    const gta = jsonData.GTA
    return (
        <>
            <Inicio></Inicio>
            <div className="container">
                <div className="grid">
                    <div className="card">
                        <img src={rdr2} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/rdr2"}><h4>Red Dead Redemption II</h4></Link>
                    </div>
                    <div className="card">
                        <img src={codevein} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/codevein"}><h4>CodeVein</h4></Link>
                    </div>
                    <div className="card">
                        <img src={cyberpunk} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/cyberpunk-2077"}><h4>Cyberpunk 2077</h4></Link>
                    </div>
                    <div className="card">
                        <img src={darksouls} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/dark-souls"}><h4>Dark souls</h4></Link>
                    </div>
                    <div className="card">
                        <img src={doom} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/doom-eternal"}><h4>Doom eternal</h4></Link>
                    </div>
                    <div className="card">
                        <img src={tlou} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/tlou"}><h4>The last of us</h4></Link>
                    </div>
                    <div className="card">
                        <img src={tlou2} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/tlou2"}><h4>The last of us II</h4></Link>
                    </div>
                    <div className="card">
                        <img src={ultrakill} alt="" className="image" />
                        <Link className="titulo" to={"/accion/1/ultrakill"}><h4>Ultrakill</h4></Link>
                    </div>
                    <div className="card">
                        <img src={grand} alt="no image" className="image" />
                        <Link className="titulo" to={"/accion/1/gta-5"}><h4>{gta.titulo}</h4></Link>
                    </div>
                </div>
            </div>

            <div className="paginas">
                <NavLink className="pagina" to={"/accion/1"}>1</NavLink>
                <NavLink className="pagina" to={"/accion/2"}>2</NavLink>
                <NavLink className="pagina" to={"/accion/3"}>3</NavLink>
                <NavLink className="pagina" to={"/accion/4"}>4</NavLink>
            </div>
        </>
    )
}