import { Error } from './components/404/404'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Busqueda } from './components/barra de busqueda/busqueda'
import { Prueba } from './components/carrousel-de-fotos/prueba'

import { Pagina1Accion } from './components/accion/1/pagina1accion'

import { Rdr2 } from "./components/accion/juegos/1/rdr2"
import { Tlou } from './components/accion/juegos/1/tlou'
import { Tlou2 } from './components/accion/juegos/1/tlou2'
import { Ultrakill } from './components/accion/juegos/1/ultrakill'
import { CodeVein } from './components/accion/juegos/1/CodeVein'
import { Cyberpunk } from './components/accion/juegos/1/cyberpunk'
import { DarkSouls } from './components/accion/juegos/1/darkSouls'
import { DoomEternal } from './components/accion/juegos/1/doomEternal'
import { GTA5 } from './components/accion/juegos/1/gta5'

import { Pagina2Accion } from './components/accion/2/pagina2accion'

import { BulletsStorm } from './components/accion/juegos/2/bulletsStorm'
import { DeathLoop } from './components/accion/juegos/2/deathloop'
import { Hitman3 } from './components/accion/juegos/2/hitman-3'
import { JustCause4 } from './components/accion/juegos/2/justCause4'
import { Madmax } from './components/accion/juegos/2/madmax'
import { MGSPhantomPain } from './components/accion/juegos/2/mgsPhantomPain'
import { MortalShell } from './components/accion/juegos/2/mortalShell'
import { RemnantFromTheAshes } from './components/accion/juegos/2/remnantFromTheAshes'
import { WatchDogsLegion } from './components/accion/juegos/2/watchDogsLegion'


import { Pagina3Accion } from './components/accion/3/pagina3accion'

import { Bayonetta2 } from './components/accion/juegos/3/bayonetta2'
import { Borderlands3 } from './components/accion/juegos/3/borderlands3'
import { Dishonored2 } from './components/accion/juegos/3/dishonored2'
import { DyingLight2 } from './components/accion/juegos/3/dyingLight2'
import { FarCry6 } from './components/accion/juegos/3/farCry6'
import { JediFallenOrder } from './components/accion/juegos/3/jediFallenOrder'
import { ResidentEvilVillage } from './components/accion/juegos/3/residentEvilVillage'
import { ShadowsOfWar } from './components/accion/juegos/3/shadowsOfWar'
import { Titanfall2 } from './components/accion/juegos/3/titanfall2'

import { Pagina4accion } from './components/accion/4/pagina4accion'

import { AssassinsCreedValhalla } from './components/accion/juegos/4/assasinsCreedValhalla'
import { Bloodborne } from './components/accion/juegos/4/bloodborne'
import { Control } from './components/accion/juegos/4/control'
import { DevilMayCry5 } from './components/accion/juegos/4/devilMayCry5'
import { GodOfWar2018 } from './components/accion/juegos/4/godOfWar2018'
import { HorizonZeroDawn } from './components/accion/juegos/4/horizonZeroDawn'
import { Nioh2 } from './components/accion/juegos/4/nioh2'
import { SekiroShadowsDieTwice } from './components/accion/juegos/4/sekiroShadowsDieTwice'
import { GhostOfTushima } from './components/accion/juegos/4/ghostOfTushima'


import { Corto1 } from './components/corto/1/pagina1corto'

import { Hike } from './components/corto/juegos/1/hike'
import { Firewatch } from './components/corto/juegos/1/firewatch'
import { Gris } from './components/corto/juegos/1/gris'
import { Inside } from './components/corto/juegos/1/inside'
import { Journey } from './components/corto/juegos/1/journey'
import { OxenFree } from './components/corto/juegos/1/oxenfree'
import { TheBegginersGuide } from './components/corto/juegos/1/theBegginerGuide'
import { ToTheMoon } from './components/corto/juegos/1/toTheMoon'
import { WhatRemainsOfEdithFinch } from './components/corto/juegos/1/whatRemainsOfEdithFinch'


import { Pagina2Corto } from './components/corto/2/pagina2corto'

import { Abzu } from './components/corto/juegos/2/abzu'
import { DearEsther } from './components/corto/juegos/2/dearEsther'
import { Flower } from './components/corto/juegos/2/flower'
import { HerStory } from './components/corto/juegos/2/herHistory'
import { DonutCountry } from './components/corto/juegos/2/donutCountry'
import { StanleyParable } from './components/corto/juegos/2/stanleyParable'
import { Tacoma } from './components/corto/juegos/2/tacoma'
import { TheRoom } from './components/corto/juegos/2/theRoom'
import { TheUnfinishedSwan } from './components/corto/juegos/2/theUnfinishedSwan'

import { Pagina3Corto } from './components/corto/3/pagina3corto'

import { EveryBodyIsGone } from './components/corto/juegos/3/everyBodyIsGone'
import { Observation } from './components/corto/juegos/3/observation'
import { OuterWild } from './components/corto/juegos/3/outerWilds'
import { TellingLies } from './components/corto/juegos/3/tellingLies'
import { TheLastCampfire } from './components/corto/juegos/3/the-last-campfire'
import { Virginia } from './components/corto/juegos/3/virginia'
import { MaifoldGarden } from './components/corto/juegos/3/maifoldGarden'
import { SuperLiminal } from './components/corto/juegos/3/superliminal'
import { TheWitness } from './components/corto/juegos/3/theWitness'

import { Pagina4Corto } from './components/corto/4/pagina4corto'

import { BeforeYourEyes } from './components/corto/juegos/4/beforeYourEyes'
import { Bound } from './components/corto/juegos/4/bound'
import { Maquette } from './components/corto/juegos/4/maquette'
import { Oneshot } from './components/corto/juegos/4/oneshot'
import { TheBradwellConspiration } from './components/corto/juegos/4/theBradwellConspiration'
import { TheMagicCircle } from './components/corto/juegos/4/theMagicCircle'
import { TheRedStringsClub } from './components/corto/juegos/4/theRedStringsClub'
import { TheSuicideOfRachelFoster } from './components/corto/juegos/4/theSuicideOfRachelFoster'
import { EnderLilies } from './components/corto/juegos/4/enderLilies'

import { SD1 } from './components/2D/1/pagina12D'

import { Celeste } from './components/2D/juegos/1/celeste'
import { HollowKnight } from './components/2D/juegos/1/hollowKnight'
import { HotlineMiami } from './components/2D/juegos/1/hotlineMiami'
import { HotlineMiami2 } from './components/2D/juegos/1/hotlineMiami2'
import { MarioBros } from './components/2D/juegos/1/marioBros'
import { SilkSong } from './components/2D/juegos/1/silkSong'
import { StardewValley } from './components/2D/juegos/1/stardewValley'
import { Terraria } from './components/2D/juegos/1/terraria'
import { Undertale } from './components/2D/juegos/1/undertale'


import { Pagina22D } from './components/2D/2/pagina22D'

import { AxiomVerge } from './components/2D/juegos/2/axiomVerge'
import { Cuphead } from './components/2D/juegos/2/cuphead'
import { DeadCells } from './components/2D/juegos/2/deadCells'
import { HyperLightDrifter } from './components/2D/juegos/2/hyperLightDrifter'
import { Limbo } from './components/2D/juegos/2/limbo'
import { OriAndTheBlindForest } from './components/2D/juegos/2/oriAndTheBlidForest'
import { ShovelKnight } from './components/2D/juegos/2/shovelKnight'
import { SuperMeatBoy } from './components/2D/juegos/2/superMeatBoy'
import { EnterTheGungeon } from './components/2D/juegos/2/enterTheGungeon'

import { Pagina32D } from './components/2D/3/pagina32D'

import { Braid } from './components/2D/juegos/3/braid'
import { ChildOfTheLight } from './components/2D/juegos/3/childOfLight'
import { Guacamelee } from './components/2D/juegos/3/guacamelee!'
import { MarkOfTheNinja } from './components/2D/juegos/3/markOfTheNinja'
import { RogueLegacy } from './components/2D/juegos/3/rogueLegacy'
import { SaltAndTheSectuary } from './components/2D/juegos/3/saltAndTheSectuary'
import { TheMessenger } from './components/2D/juegos/3/theMessenger'
import { Owlboy } from './components/2D/juegos/3/owlboy'
import { Spelunky } from './components/2D/juegos/3/spelunky'

import { Pagina42D } from './components/2D/4/pagina42D'

import { Blasphemous } from './components/2D/juegos/4/blasphemous'
import { Broforce } from './components/2D/juegos/4/broforce'
import { CaveHistory } from './components/2D/juegos/4/caveHistory'
import { KatanaZero } from './components/2D/juegos/4/katanaZero'
import { NightInTheWoods } from './components/2D/juegos/4/nightInTheWoods'
import { SlainBackFromHell } from './components/2D/juegos/4/slainBackFromHell'
import { RiskOfRain } from './components/2D/juegos/4/riskOfRain'
import { StreamWordlDig2 } from './components/2D/juegos/4/streamWordlDig2'
import { IconoClasts } from './components/2D/juegos/4/iconoclasts'

import { Terror1 } from './components/terror/1/pagina1terror'

import { Amnesia } from './components/terror/juegos/1/amnesia'
import { LayersOfFear } from './components/terror/juegos/1/layersOfFear'
import { LittleNightmares } from './components/terror/juegos/1/littleNightmares'
import { LittleNightmares2 } from './components/terror/juegos/1/littleNighmares2'
import { Outlast } from './components/terror/juegos/1/outlast'
import { Outlast2 } from './components/terror/juegos/1/outlast2'
import { Phasmophobia } from './components/terror/juegos/1/phasmophobia'
import { SilentHill2 } from './components/terror/juegos/1/silentHill2'
import { Soma } from './components/terror/juegos/1/soma'

import { Pagina2terror } from './components/terror/2/pagina2terror'

import { UntilDawn } from './components/terror/juegos/2/untilDawn'
import { SilentHill1993 } from './components/terror/juegos/2/silentHill1993'
import { SilentAlone } from './components/terror/juegos/2/silentAlone'
import { HelloNeighbor } from './components/terror/juegos/2/helloNeighbor'
import { GabrielKnight } from './components/terror/juegos/2/gabrielKnight'
import { Fnaf } from './components/terror/juegos/2/fnaf'
import { EternalDarkness } from './components/terror/juegos/2/eternalDarkness'
import { DDLC } from './components/terror/juegos/2/ddlc'
import { SeptimoGuest } from './components/terror/juegos/2/7hguest'

import { Pagina3terror } from './components/terror/3/pagina3terror'

import { Carrion } from './components/terror/juegos/3/carrion'
import { Visage } from './components/terror/juegos/3/visage'
import { TheVanishingOfEvanCarter } from './components/terror/juegos/3/theVanishingOfEvanCarter'
import { TheLastDoor } from './components/terror/juegos/3/theLastDoor'
import { TheForest } from './components/terror/juegos/3/theForest'
import { DarkestDungeon } from './components/terror/juegos/3/darkestDungeon'
import { CondemnedCriminal } from './components/terror/juegos/3/condemnedCriminalOrigins'
import { CallOfCuthulhu } from './components/terror/juegos/3/callOfCuthulhu'
import { Back4Blood } from './components/terror/juegos/3/back4Blood'

import { Pagina4terror } from './components/terror/4/pagina4terror'

import { SilentHill4 } from './components/terror/juegos/4/silentHill4'
import { BlairWitch } from './components/terror/juegos/4/blairWitch'
import { YummeNikki } from './components/terror/juegos/4/yummeNikki'
import { TheSinkingCity } from './components/terror/juegos/4/theSinkingCity'
import { TheCatLady } from './components/terror/juegos/4/theCatLady'
import { SunlessSkies } from './components/terror/juegos/4/sunlessSkies'
import { HouseOfAshes } from './components/terror/juegos/4/houseOfAshes'
import { GoneHome } from './components/terror/juegos/4/goneHome'
import { ClockTower } from './components/terror/juegos/4/clockTower'

import { PrimeraPersona1 } from './components/primera-persona/1/pagina1primerapersona'
import { Pagina2primerapersona } from './components/primera-persona/2/pagina2primerapersona'
import { Pagina3primerapersona } from './components/primera-persona/3/pagina3primerapersona'
import { Pagina4primerapersona } from './components/primera-persona/4/pagina4primerapersona'
import { Bienvenida } from './components/bienvenida/bienvenida'
function App() {

  return (
    <>
      <BrowserRouter>
        <Menu />
        <Busqueda />
        <Routes>
          {/* generales */}
          <Route path='/' element={<Bienvenida />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/eskere/1' element={<Prueba />}></Route>
          {/* rutas de paginas de terror */}
          <Route path='/terror/1' element={<Terror1 />}></Route>
          <Route path='/terror/2' element={<Pagina2terror />}></Route>
          <Route path='/terror/3' element={<Pagina3terror />}></Route>
          <Route path='/terror/4' element={<Pagina4terror />}></Route>
          {/* rutas de juegos de terror */}
          <Route path='/terror/1/amnesia' element={<Amnesia />}></Route>
          <Route path='/terror/1/layers-of-fear' element={<LayersOfFear />}></Route >
          <Route path='/terror/1/little-nightmares-2' element={<LittleNightmares2 />}></Route>
          <Route path='/terror/1/little-nightmares' element={<LittleNightmares />}></Route>
          <Route path='/terror/1/outlast' element={<Outlast />}></Route>
          <Route path='/terror/1/outlast-2' element={<Outlast2 />}></Route>
          <Route path='/terror/1/phasmophobia' element={<Phasmophobia />}></Route>
          <Route path='/terror/1/silent-hill-2' element={<SilentHill2 />}></Route>
          <Route path='/terror/1/soma' element={<Soma />}></Route>

          <Route path='/terror/2/until-dawn' element={<UntilDawn />}></Route>
          <Route path='/terror/2/silent-hill-1993' element={<SilentHill1993 />}></Route>
          <Route path='/terror/2/7h-guest' element={<SeptimoGuest />}></Route>
          <Route path='/terror/2/ddlc' element={<DDLC />}></Route>
          <Route path='/terror/2/eternal-darkness' element={<EternalDarkness />}></Route>
          <Route path='/terror/2/fnaf' element={<Fnaf />}></Route>
          <Route path='/terror/2/gabriel-knight' element={<GabrielKnight />}></Route>
          <Route path='/terror/2/hello-neighbor' element={<HelloNeighbor />}></Route>
          <Route path='/terror/2/silent-alone' element={<SilentAlone />}></Route>

          <Route path='/terror/3/back-4-blood' element={<Back4Blood />}></Route>
          <Route path='/terror/3/call-of-cuthulhu' element={<CallOfCuthulhu />}></Route>
          <Route path='/terror/3/carrion' element={<Carrion />}></Route>
          <Route path='/terror/3/condemned-criminal-origins' element={<CondemnedCriminal />}></Route>
          <Route path='/terror/3/darkest-dungeon' element={<DarkestDungeon />}></Route>
          <Route path='/terror/3/the-forest' element={<TheForest />}></Route>
          <Route path='/terror/3/the-last-door' element={<TheLastDoor />}></Route>
          <Route path='/terror/3/the-vanishing-of-evan-carter' element={<TheVanishingOfEvanCarter />}></Route>
          <Route path='/terror/3/visage' element={<Visage />}></Route>

          <Route path='/terror/4/blair-witch' element={<BlairWitch />}></Route>
          <Route path='/terror/4/clock-tower' element={<ClockTower />}></Route>
          <Route path='/terror/4/gone-home' element={<GoneHome />}></Route>
          <Route path='/terror/4/house-of-ashes' element={<HouseOfAshes />}></Route>
          <Route path='/terror/4/silent-hill-4' element={<SilentHill4 />}></Route>
          <Route path='/terror/4/sunless-skies' element={<SunlessSkies />}></Route>
          <Route path='/terror/4/the-cat-lady' element={<TheCatLady />}></Route>
          <Route path='/terror/4/the-sinking-city' element={<TheSinkingCity />}></Route>
          <Route path='/terror/4/yumme-nikki' element={<YummeNikki />}></Route>
          {/* rutas de paginas de accion */}
          <Route path='/accion/1' element={<Pagina1Accion />}></Route>
          <Route path='/accion/2' element={<Pagina2Accion />}></Route>
          <Route path='/accion/3' element={<Pagina3Accion />}></Route>
          <Route path='/accion/4' element={<Pagina4accion />}></Route>
          {/* rutas de juegos de accion */}
          <Route path='/accion/1/rdr2' element={<Rdr2 />}></Route>
          <Route path='/accion/1/ultrakill' element={<Ultrakill />}></Route>
          <Route path='/accion/1/doom-eternal' element={<DoomEternal />}></Route>
          <Route path='/accion/1/tlou' element={<Tlou />}></Route>
          <Route path='/accion/1/tlou-2' element={<Tlou2 />}></Route>
          <Route path='/accion/1/gta-5' element={<GTA5 />}></Route>
          <Route path='/accion/1/codevein' element={<CodeVein />}></Route>
          <Route path='/accion/1/dark-souls' element={<DarkSouls />}></Route>
          <Route path='/accion/1/cyberpunk-2077' element={<Cyberpunk />}></Route>

          <Route path='/accion/2/bulletsstorm' element={<BulletsStorm />}></Route>
          <Route path='/accion/2/deathloop' element={<DeathLoop />}></Route>
          <Route path='/accion/2/hitman-3' element={<Hitman3 />}></Route>
          <Route path='/accion/2/just-cause-4' element={<JustCause4 />}></Route>
          <Route path='/accion/2/madmax' element={<Madmax />}></Route>
          <Route path='/accion/2/mgs-phantom-pain' element={<MGSPhantomPain />}></Route>
          <Route path='/accion/2/mortal-shell' element={<MortalShell />}></Route>
          <Route path='/accion/2/remnant-from-the-ashes' element={<RemnantFromTheAshes />}></Route>
          <Route path='/accion/2/watch-dogs-legion' element={<WatchDogsLegion />}></Route>

          <Route path='/accion/3/bayonetta-2' element={<Bayonetta2 />}></Route>
          <Route path='/accion/3/borderlands-3' element={<Borderlands3 />}></Route>
          <Route path='/accion/3/dishonored-2' element={<Dishonored2 />}></Route>
          <Route path='/accion/3/dying-light-2' element={<DyingLight2 />}></Route>
          <Route path='/accion/3/far-cry-6' element={<FarCry6 />}></Route>
          <Route path='/accion/3/jedi-fallen-order' element={<JediFallenOrder />}></Route>
          <Route path='/accion/3/resident-evil-village' element={<ResidentEvilVillage />}></Route>
          <Route path='/accion/3/shadows-of-war' element={<ShadowsOfWar />}></Route>
          <Route path='/accion/3/titanfall-2' element={<Titanfall2 />}></Route>

          <Route path='/accion/4/assassins-creed-valhalla' element={<AssassinsCreedValhalla />}></Route>
          <Route path='/accion/4/bloodborne' element={<Bloodborne />}></Route>
          <Route path='/accion/4/control' element={<Control />}></Route>
          <Route path='/accion/4/devil-may-cry-5' element={<DevilMayCry5 />}></Route>
          <Route path='/accion/4/god-of-war-5' element={<GodOfWar2018 />}></Route>
          <Route path='/accion/4/horizon-zero-dawn' element={<HorizonZeroDawn />}></Route>
          <Route path='/accion/4/nioh-2' element={<Nioh2 />}></Route>
          <Route path='/accion/4/sekiro-shadows-die-twice' element={<SekiroShadowsDieTwice />}></Route>
          <Route path='/accion/4/ghost-of-tushima' element={<GhostOfTushima />}></Route>
          {/* rutas de paginas de corto */}
          <Route path='/corto/1' element={<Corto1 />}></Route>
          <Route path='/corto/2' element={<Pagina2Corto />}></Route>
          <Route path='/corto/3' element={<Pagina3Corto />}></Route>
          <Route path='/corto/4' element={<Pagina4Corto />}></Route>
          {/* rutas de juegos de corto */}

          <Route path='/corto/1/hike' element={<Hike />}></Route>
          <Route path='/corto/1/firewatch' element={<Firewatch />}></Route>
          <Route path='/corto/1/gris' element={<Gris />}></Route>
          <Route path='/corto/1/inside' element={<Inside />}></Route>
          <Route path='/corto/1/journey' element={<Journey />}></Route>
          <Route path='/corto/1/oxenfree' element={<OxenFree />}></Route>
          <Route path='/corto/1/the-begginers-guide' element={<TheBegginersGuide />}></Route>
          <Route path='/corto/1/to-the-moon' element={<ToTheMoon />}></Route>
          <Route path='/corto/1/what-remains-of-edith-finch' element={<WhatRemainsOfEdithFinch />}></Route>

          <Route path='/corto/2/abzu' element={<Abzu />}></Route>
          <Route path='/corto/2/dear-esther' element={<DearEsther />}></Route>
          <Route path='/corto/2/her-history' element={<HerStory />}></Route>
          <Route path='/corto/2/donut-country' element={<DonutCountry />}></Route>
          <Route path='/corto/2/stanley-parable' element={<StanleyParable />}></Route>
          <Route path='/corto/2/tacoma' element={<Tacoma />}></Route>
          <Route path='/corto/2/the-room' element={<TheRoom />}></Route>
          <Route path='/corto/2/the-unfinished-swan' element={<TheUnfinishedSwan />}></Route>
          <Route path='/corto/2/flower' element={<Flower />}></Route>

          <Route path='/corto/3/everybody-is-gone' element={<EveryBodyIsGone />}></Route>
          <Route path='/corto/3/observation' element={<Observation />}></Route>
          <Route path='/corto/3/outer-wild' element={<OuterWild />}></Route>
          <Route path='/corto/3/super-liminal' element={<SuperLiminal />}></Route>
          <Route path='/corto/3/telling-lies' element={<TellingLies />}></Route>
          <Route path='/corto/3/the-last-campfire' element={<TheLastCampfire />}></Route>
          <Route path='/corto/3/virginia' element={<Virginia />}></Route>
          <Route path='/corto/3/maifold-garden' element={<MaifoldGarden />}></Route>
          <Route path='/corto/3/the-witness' element={<TheWitness />}></Route>

          <Route path='/corto/4/before-your-eyes' element={<BeforeYourEyes />}></Route>
          <Route path='/corto/4/bound' element={<Bound />}></Route>
          <Route path='/corto/4/ender-lilies' element={<EnderLilies />}></Route>
          <Route path='/corto/4/maquette' element={<Maquette />}></Route>
          <Route path='/corto/4/oneshot' element={<Oneshot />}></Route>
          <Route path='/corto/4/the-bradwell-conspiracy' element={<TheBradwellConspiration />}></Route>
          <Route path='/corto/4/the-magic-circle' element={<TheMagicCircle />}></Route>
          <Route path='/corto/4/the-red-strings-club' element={<TheRedStringsClub />}></Route>
          <Route path='/corto/4/the-suicide-of-rachel-foster' element={<TheSuicideOfRachelFoster />}></Route>

          {/* rutas de paginas de 2D */}
          <Route path='/2D/1' element={<SD1 />}></Route>
          <Route path='/2D/2' element={<Pagina22D />}></Route>
          <Route path='/2D/3' element={<Pagina32D />}></Route>
          <Route path='/2D/4' element={<Pagina42D />}></Route>
          {/* rutas de juegos de 2D */}

          <Route path='/2D/1/celeste' element={<Celeste />}></Route>
          <Route path='/2D/1/hollow-knight' element={<HollowKnight />}></Route>
          <Route path='/2D/1/hotline-miami' element={<HotlineMiami />}></Route>
          <Route path='/2D/1/hotline-miami-2' element={<HotlineMiami2 />}></Route>
          <Route path='/2D/1/mario-bros' element={<MarioBros />}></Route>
          <Route path='/2D/1/silksong' element={<SilkSong />}></Route>
          <Route path='/2D/1/stardew-valley' element={<StardewValley />}></Route>
          <Route path='/2D/1/terraria' element={<Terraria />}></Route>
          <Route path='/2D/1/undertale' element={<Undertale />}></Route>

          <Route path='/2D/2/axiom-verge' element={<AxiomVerge />}></Route>
          <Route path='/2D/2/dead-cells' element={<DeadCells />}></Route>
          <Route path='/2D/2/enter-the-gungeon' element={<EnterTheGungeon />}></Route>
          <Route path='/2D/2/hyper-light-drifter' element={<HyperLightDrifter />}></Route>
          <Route path='/2D/2/limbo' element={<Limbo />}></Route>
          <Route path='/2D/2/ori-and-the-blind-forest' element={<OriAndTheBlindForest />}></Route>
          <Route path='/2D/2/shovel-knight' element={<ShovelKnight />}></Route>
          <Route path='/2D/2/super-meat-boy' element={<SuperMeatBoy />}></Route>
          <Route path='/2D/2/cuphead' element={<Cuphead />}></Route>

          <Route path='/2D/3/braid' element={<Braid />}></Route>
          <Route path='/2D/3/child-of-the-light' element={<ChildOfTheLight />}></Route>
          <Route path='/2D/3/guacamelee' element={<Guacamelee />}></Route>
          <Route path='/2D/3/mark-of-the-ninja/' element={<MarkOfTheNinja />}></Route>
          <Route path='/2D/3/owlboy' element={<Owlboy />}></Route>
          <Route path='/2D/3/rogue-legacy' element={<RogueLegacy />}></Route>
          <Route path='/2D/3/salt-and-the-sectuary' element={<SaltAndTheSectuary />}></Route>
          <Route path='/2D/3/spelunky' element={<Spelunky />}></Route>
          <Route path='/2D/3/the-messenger' element={<TheMessenger />}></Route>

          <Route path='/2D/4/blasphemous' element={<Blasphemous />}></Route>
          <Route path='/2D/4/broforce' element={<Broforce />}></Route>
          <Route path='/2D/4/cave-history' element={<CaveHistory />}></Route>
          <Route path='/2D/4/iconoclasts' element={<IconoClasts />}></Route>
          <Route path='/2D/4/katana-zero' element={<KatanaZero />}></Route>
          <Route path='/2D/4/night-in-the-woods' element={<NightInTheWoods />}></Route>
          <Route path='/2D/4/risk-of-rain' element={<RiskOfRain />}></Route>
          <Route path='/2D/4/slain-back-from-hell' element={<SlainBackFromHell />}></Route>
          <Route path='/2D/4/stream-wordl-dig-2' element={<StreamWordlDig2 />}></Route>

          {/* rutas de paginas de primera persona */}
          <Route path='/primera-persona/1' element={<PrimeraPersona1 />}></Route>
          <Route path='/primera-persona/2' element={<Pagina2primerapersona />}></Route>
          <Route path='/primera-persona/3' element={<Pagina3primerapersona />}></Route>
          <Route path='/primera-persona/4' element={<Pagina4primerapersona />}></Route>
          {/* rutas de juegos de primera persona */}
        </Routes >
      </BrowserRouter >
    </>
  )
}

export default App
