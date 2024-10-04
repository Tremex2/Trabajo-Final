import { useEffect } from "react";
import "./busqueda.css";
import { Link } from "react-router-dom";

export function Busqueda() {
    useEffect(() => {
        const handleKeyUp = (e) => {
            if (e.target.matches("#buscador")) {
                if (e.key === "Escape") e.target.value = "";

                const query = e.target.value.toLowerCase();
                document.querySelectorAll(".articulo").forEach(fruta => {
                    if (query === "") {
                        fruta.classList.add("filtro");
                    } else {
                        fruta.textContent.toLowerCase().includes(query)
                            ? fruta.classList.remove("filtro")
                            : fruta.classList.add("filtro");
                    }
                });
            }
        };

        document.addEventListener("keyup", handleKeyUp);

        return () => {
            document.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    return (
        <>
            <section className="contenedor-main">
                <div className="input-container">
                    <div className="inline-buscador">
                        <ion-icon name="search-circle-outline"></ion-icon>
                        <input type="text" name="buscador" id="buscador" placeholder="buscar juego" />
                    </div>
                    <ul id="listaArticulos">
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍊Naranja</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍓Fresa</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍐Pera</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍍Piña</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍌Plátano</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🍈Melon</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">🥭Mango</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rdr2</Link></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
