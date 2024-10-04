import { useEffect } from "react";
import "./busqueda.css";
import { Link } from "react-router-dom";

export function Busqueda() {
  useEffect(() => {
    const handleKeyUp = (e) => {
      if (e.target.matches("#buscador")) {
        if (e.key === "Escape") e.target.value = "";

        const query = e.target.value.toLowerCase();
        document.querySelectorAll(".articulo").forEach((fruta) => {
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
            <ion-icon name="search-circle-outline" id="icono-buscador"></ion-icon>
            <input type="text" name="buscador" id="buscador" placeholder="buscar juego" />
          </div>
          <ul id="listaArticulos">
            <li><Link className="articulo no-deco filtro" to="/accion/1/rdr2">rdr2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/codevein">CodeVein</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/cyberpun-2077">Cyberpunk</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/dark-souls">Dark Souls</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/doom-eternal">Doom Eternal</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/tlou">The last of us II</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/tlou2">The last of us I</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/ultrakill">Ultrakill</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/1/gta-5">GTA V</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/watch-dogs-legion">watch dogs legion</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/remnant-from-the-ashes">remnant from the ashes</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/mortal-shell">mortal shell</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/mgs-phantom-pain">MGS phantom pain</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/madmax">Madmax</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/just-cause-4">Just Cause 4</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/hitman-3">Hitman 3</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/deathloop">Death Loop</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/2/bulletsstorm">BulletsStorm</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/titanfall-2">Titanfall 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/shadows-of-war">Shadows of war</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/resident-evil-village">Resident evil village</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/jedi-fallen-order">Jedi Fallen Order</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/far-cry-6">Far cry 6</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/dying-light-2">Dying Light 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/dishonored-2">Dishonored 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/borderlands-3">Borderlands 3</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/3/bayonetta-2">Bayonetta 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/sekiro-shadows-die-twice">sekiro shadows die twice</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/nioh2">Nioh 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/horizon-zero-dawn">Horizon Zero Dawn</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/god-of-war-5">God Of War 2018</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/ghost-of-tushima">Ghost of tushima</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/devil-may-cry-5">Devil may Cry 5</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/control">Control</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/bloodborne">Bloodborne</Link></li>
            <li><Link className="articulo no-deco filtro" to="/accion/4/assassins-creed-valhalla">Assasins Creed Valhalla</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/amnesia">Amnesia</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/layers-of-fear">Layers of fear</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/little-nightmares-2">Little Nightmares 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/little-nightmares">Little nightmares</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/outlast">Outlast</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/outlast-2">Outlast 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/phasmophobia">phamophobia</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/silent-hill-2">Silent Hill 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/1/soma">Soma</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/until-dawn">Until Dawn</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/silent-hill-1993">Silent Hill</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/silent-alone">Silent Alone</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/hello-neighbor">Hello Neighbor</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/gabriel-knight">Gabriel Knight</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/fnaf">Five nights at freddys</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/eternal-darkness">Eternal Darkness</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/ddlc">DDLC</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/2/7h-guest">7h Guest</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/carrion">Carrion</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/visage">Visage</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/the-vanishing-of-evan-carter">The vanishing of Evan Carter</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/the-last-door">The Last Door</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/the-forest">The forest</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/darkest-dungeon">Darkest Dungeon</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/condemned-criminal-origins">Condemned</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/call-of-cuthulhu">Call of Cuthulhu</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/3/back-4-blood">Back 4 Blood</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/silent-hill-4">silent hill 4</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/blair-witch">Blair Witch</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/yumme-nikki">Yumme Nikki</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/the-sinking-city">The sinking City</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/the-cat-lady">The cat lady</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/sunless-skies">Sunless Skies</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/house-of-ashes">House Of Ashes</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/gone-home">Gone Home</Link></li>
            <li><Link className="articulo no-deco filtro" to="/terror/4/clock-tower">Clock Tower</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/bioshock">Bioshock</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/dishonored">Dishonored</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/dying-light">Dying Light</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/far-cry-5">Far Cry 5</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/half-life-2">Half Life 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/portal-2">Portal 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/prey">Prey</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/subnautica">Subnautica</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/1/the-elders-scroll-skyrim">Skyrim the elders scroll</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/team-fortress-2">Team Fortress 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/fear-2-proyect-origin">Fear 2 Proyext Origin</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/escape-from-tarkov">Escape From Tarkov</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/deus-ex">Deus Ex</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/crysis-3">Crysis 3</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/crysis-2">Crysis 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/crysis">Crysis</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/clide-barkers-jericho">clide barkers jericho</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/2/apex-legends">apex legends</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/the-outer-wilds">the outer wordls</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/system-shock-2">system shock 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/stalker-shadow-from-chernobyl">stalker shadow chernobyl</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/serious-sam">serious sam</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/rainbow-six-siege">Rainbow Six Siege</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/rage-2">Rage 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/portal">Portal</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/mirrors-edge">Mirrors Edge</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/call-of-juarez-gunslinguer">Call Of Juarez gunslinguer</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/quake">Quake</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/metro-last-night">Metro Last Night</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/halo-combat-envolved">Halo combat envolved</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/far-cry-3">far cry 3</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/3/doom-viejo">Doom 1963</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/4/csgo">csgo</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/4/modern-warfare">call of duty modern warfare</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/4/wolfestein">wolfestein</Link></li>
            <li><Link className="articulo no-deco filtro" to="/primera-persona/4/battlefield">battlefield</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/celeste">Celeste</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/hollow-knight">Hollow Knight</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/hotline-miami-2">Hotline Miami II</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/hotline-miami">Hotline Miami</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/mario-bros">Mario Bros</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/silksong">SilkSong</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/stardew-valley">Stardew Valley</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/terraria">Terraria</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/1/undertale">Undertale</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/super-meat-boy">super meat boy</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/shovel-knight">shovel knight</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/ori-and-the-blind-forest">Ori and the blind forest</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/limbo">Limbo</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/hyper-light-drifter">Hyper Light Drifter</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/enter-the-gungeon">Enter the gungeon</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/dead-cells">dead cells</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/cuphead">Cuphead</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/2/axiom-verge">Axiom Verge</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/the-messenger">The Messenger</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/spelunky">Spelunky</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/salt-and-the-sectuary">Salt And The Sectuary</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/rogue-legacy">rogue legacy 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/owlboy">Owlboy</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/mark-of-the-ninja">Mark of the ninja</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/guacamelee">Guacamelee!</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/child-of-the-light">Child of the light</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/3/braid">Braid</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/stream-wordl-dig-2">Stream Wordl Dig 2</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/slain-back-from-hell">Slain back from hell</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/risk-of-rain">Risk of rain</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/night-in-the-woods">night in the woods</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/katana-zero">Katana Zero</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/iconoclasts">Iconoclasts</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/cave-history">Cave History</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/broforce">Broforce</Link></li>
            <li><Link className="articulo no-deco filtro" to="/2D/4/blasphemous">Blasphemous</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/hike">a short hike</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/firewatch">firewatch</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/gris">gris</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/inside">inside</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/journey">journey</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/the-begginers-guide">the begginers guide</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/to-the-moon">to the moon</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1what-remains-of-edith-finch/">What Remains Of Edith Finch</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/1/oxenfree">oxenfree</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/">the unfinished swan</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/the-room">the room</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/tacoma">tacoma</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/stanley-parable">stanley parable</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/donut-country">donut country</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/her-history">her story</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/flower">flower</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/dear-esther">dear esther</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/2/abzu">abzu</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/maifold-garden">maifold garden</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/virginia">virginia</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/the-witness">the witness</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/the-last-campfire">the last campfire</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/telling-lies">telling lies</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/super-liminal">super liminal</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/outer-wild">outer wilds</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/observation">observation</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/3/everybody-is-gone">everybody is gone</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/the-suicide-of-rachel-foster">the suicide of rachel foster</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/the-red-strings-club">the red strings club</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/the-magic-circle">the magic circle</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/the-bradwell-conspiracy">the bradwell conspiracy</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/oneshot">OneShot</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/maquette">Maquette</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/ender-lilies">Ender Lilies</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/before-your-eyes">Before your eyes</Link></li>
            <li><Link className="articulo no-deco filtro" to="/corto/4/bound">Bound</Link></li>
          </ul>
        </div>
      </section>
    </>
  );
}
