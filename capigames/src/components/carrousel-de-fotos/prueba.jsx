import ImagenCambiable from "./carrousel"
import imagen1 from "../../public/capigames.jpg"
import imagen2 from "../../public/construccion.jpg"
import imagen3 from "../../public/2D/1/celeste.jpg"


export function Prueba() {
    return (
        <>
            <div>
                <ImagenCambiable imagen1={imagen1} imagen2={imagen2} imagen3={imagen3}></ImagenCambiable>
            </div>
        </>
    )
}