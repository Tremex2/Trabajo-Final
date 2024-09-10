import { Inicio } from "../Pagina inicial/inicio"
import "../Cards/card.css"
import celeste from "../../public/2D/celeste.jpg"
import holllowKnight from "../../public/2D/hollow-knight.jpg"
import hotline2 from "../../public/2D/hotline-miami-II.jpg"
import hotline from "../../public/2D/hotline-miami.png"
import mario from "../../public/2D/mario.jpg"
import silksong from "../../public/2D/silksong.jpg"
import stardew from "../../public/2D/stardew.jpg"
import terraria from "../../public/2D/terraria.jpg"
import undertale from "../../public/2D/undertale.jpg"

export function SD1() {
    return(
        <>
       <Inicio/>
       <div className="container">
        <div className="grid">
            <div className="card">
            <img src={celeste} alt="" className="image" />
            <div className="titulo"><h4>Celeste</h4></div>
            </div>
            <div className="card">
            <img src={holllowKnight} alt="" className="image" />
            <div className="titulo"><h4>Hollow Knight</h4></div>
            </div>
            <div className="card">
            <img src={hotline2} alt="" className="image" />
            <div className="titulo"><h4>Hotline Miami II</h4></div>
            </div>
            <div className="card">
            <img src={hotline} alt="" className="image" />
            <div className="titulo"><h4>Hotline Miami</h4></div>
            </div>
            <div className="card">
            <img src={mario} alt="" className="image" />
            <div className="titulo"><h4>Mario Bros</h4></div>
            </div>
            <div className="card">
            <img src={silksong} alt="" className="image" />
            <div className="titulo"><h4>Silksong</h4></div>
            </div>
            <div className="card">
            <img src={stardew} alt="" className="image" />
            <div className="titulo"><h4>Stardew Valley</h4></div>
            </div>
            <div className="card">
            <img src={terraria} alt="" className="image" />
            <div className="titulo"><h4>Terraria</h4></div>
            </div>
            <div className="card">
            <img src={undertale} alt="" className="image" />
            <div className="titulo"><h4>Undertale</h4></div>
            </div>
        </div>
        </div>
        </>
    )
}