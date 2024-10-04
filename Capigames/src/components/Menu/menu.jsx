import { useState, useRef, useEffect } from "react";
import "./menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  const [menuClass, setMenuClass] = useState("izquierda");
  const menuRef = useRef(null);

  function despliegue() {
    setMenuClass((prevClass) =>
      prevClass === "izquierda" ? "derecha" : "izquierda"
    );
  }
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuClass("izquierda");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="boton-menu" onClick={despliegue}>
        <div className="barra1"></div>
        <div className="barra2"></div>
        <div className="barra3"></div>
      </div>
      <div className={menuClass} id="menu" ref={menuRef}>
        <Link className="menu">
          <h2> Menu</h2>
        </Link>
        <div className="linea-recta-menu"></div>
        <Link className="opcion" to={"/"}>
          <h4>Inicio</h4>
        </Link>
        <Link className="opcion" to={"/accion/1"}>
          <h4>accion</h4>
        </Link>
        <Link className="opcion" to={"/terror/1"}>
          <h4>terror</h4>
        </Link>
        <Link className="opcion" to={"/primera-persona/1"}>
          <h4>primera persona</h4>
        </Link>
        <Link className="opcion" to={"/2D/1"}>
          <h4>2D</h4>
        </Link>
        <Link className="opcion" to={"/corto/1"}>
          <h4>corto</h4>
        </Link>
        <div className="opcion">
          <h4 className="nombres-de-creadores">TIZIANO:</h4>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <div className="opcion">
          <h4 className="nombres-de-creadores">DAVID:</h4>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <div className="opcion">
          <h4 className="nombres-de-creadores">HEITOR:</h4>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="redes-sociales-de-los-creadores" href="">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </div>
        <div className="linea-recta-cerrar"></div>
        <Link className="boton-menu-cerrar" onClick={despliegue}>
          <h2>Cerrar</h2>
        </Link>
      </div>
    </>
  );
}
