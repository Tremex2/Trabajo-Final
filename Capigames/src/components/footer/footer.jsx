import "./footer.css"
import capigames from "../../public/capigames.jpg"
import tomas from "../../public/el-thomas.jpg"
export function Footer() {

    return (
        <>

            <div className="bloque">
                <div className="contenedor-footer">
                    <div className="ubicador-footer-izq">
                        <h1 className="integrantes">Creadores</h1>
                        <ul className="integrantes-lista">
                            <li><h3>@DAVID BURZOMATO</h3></li>
                            <li><h3>@TIZIANO ARCE   </h3></li>
                            <li><h3>@HEITOR LOPEZ   </h3></li>
                        </ul>
                    </div>
                    <div className="sobre">
                        <h2 className="titulo-footer">
                            Info
                        </h2>
                        <h3>
                            Capigames es tu pagina de juegos mas practica y confiable al alcance de unos clicks!
                        </h3>
                        <h3>
                            Capigames no tiene los derechos de distribucion ni es propietario de los juegos
                        </h3>
                        <h3>
                            © Todos los derechos reservados 2025
                        </h3>
                    </div>
                    <div className="ubicador-footer-der">
                        <div className="colaborador">
                            <h1>
                                Tomas Cuevas
                            </h1>

                            <div className="images-footer">
                                <div className="contenedor-imagen-footer">
                                    <div className="imagen-footer">
                                        <img src={tomas} alt="" />
                                    </div>
                                    <div className="imagen-footer">
                                        <img src={capigames} alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="el-colaborador">
                            <h3>Nos hizo el icono para la pagina</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}