import { Inicio } from "../Pagina inicial/inicio"
import capi from "../../public/capigames.jpg"
import "./bienvenida.css"
export function Bienvenida() {
    return(
    <>
    <Inicio/>
    <div className="bienvenida-titulo">
       <h1>¡Bienvenido a capigames!</h1>
       <h2>Con los tags que ves arriba puedes desplazarte en nuestro catalogo</h2>
    </div>
     <div className="imagen-bienvenida">
       <img src={capi} alt="" id="capigames" />
     </div>
    </>
    )
}