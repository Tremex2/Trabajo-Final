import "./404.css"
import { Link } from "react-router-dom"
import capi from "../../public/capigames.jpg"
export function Error() {
    return(
        <>
        <div className="titulo background-404">
            <h1>404-Pagina no encontrada...</h1>
        </div>
        <h2 className="subtitulo-404">* Sugerimos volver a la pagina de inicio, disculpe las molestias</h2>
        <div className="imagen-404">
         <img src={capi} alt="" />
        </div>
        <Link className="link-404" to={"/"}><h2>volver al inicio</h2></Link>
        </>
    )
}