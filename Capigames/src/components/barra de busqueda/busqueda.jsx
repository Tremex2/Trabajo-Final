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
                        <li><Link className="articulo no-deco filtro" to="#">CodeVein</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Cyberpunk</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Dark Souls</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Doom Eternal</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The last of us II</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The last of us I</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Ultrakill</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">GTA V</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">watch dogs legion</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">remnant from the ashes</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">mortal shell</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">MGS phantom pain</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Madmax</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Just Cause 4</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hitman 3</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Death Loop</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">BulletsStorm</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Titanfall 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Shadows of war</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Resident evil village</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Jedi Fallen Order</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Far cry 6</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Dying Light 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Dishonored 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Borderlands 3</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Bayonetta 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">sekiro shadows die twice</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Nioh 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Horizon Zero Dawn</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">God Of War 2018</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Ghost of tushima</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Devil may Cry 5</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Control</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Bloodborne</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Assasins Creed Valhalla</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Amnesia</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Layers of fear</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Little Nightmares 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Little nightmares</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Outlast</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Outlast 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">phamophobia</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Silent Hill 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Soma</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Until Dawn</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Silent Hill</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Silent Alone</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hello Neighbor</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Gabriel Knight</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Five nights at freddys</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Eternal Darkness</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">DDLC</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">7h Guest</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Carrion</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Visage</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The vanishing of Evan Carter</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The Last Door</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The forest</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Darkest Dungeon</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Condemned</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Call of Cuthulhu</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Back 4 Blood</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">silent hill 4</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Blair Witch</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Yumme Nikki</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The sinking City</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The cat lady</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Sunless Skies</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">House Of Ashes</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Gone Home</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Clock Tower</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Bioshock</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Dishonored</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Dying Light</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Far Cry 5</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Half Life 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Portal 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Prey</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Subnautica</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Skyrim the elders scroll</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Team Fortress 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Fear 2 Proyext Origin</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Escape From Tarkov</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Deus Ex</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Crysis 3</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Crysis 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Crysis</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">clide barkers jericho</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">apex legends</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">the outer wordls</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">system shock 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">stalker shadow chernobyl</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">serious sam</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Rainbow Six Siege</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Rage 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Portal</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Mirrors Edge</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Call Of Juarez gunslinguer</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Quake</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Metro Last Night</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Halo combat envolved</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">far cry 3</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Doom 1963</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">csgo</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">call of duty modern warfare</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">wolfestein</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">battlefield</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Celeste</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hollow Knight</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hotline Miami II</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hotline Miami</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Mario Bros</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">SilkSong</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Stardew Valley</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Terraria</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Undertale</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">super meat boy</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">shovel knight</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Ori and the blind forest</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Limbo</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Hyper Light Drifter</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Enter the gungeon</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">dead cells</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Cuphead</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Axiom Verge</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">The Messenger</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Spelunky</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Salt And The Sectuary</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">rogue legacy 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Owlboy</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Mark of the ninja</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Guacamelee!</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Child of the light</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Braid</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Stream Wordl Dig 2</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Slain back from hell</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Risk of rain</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">night in the woods</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Katana Zero</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Iconoclasts</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Cave History</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Broforce</Link></li>
                        <li><Link className="articulo no-deco filtro" to="#">Blasphemous</Link></li>
                    </ul>
                </div>
            </section>
        </>
    );
}
