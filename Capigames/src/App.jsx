import { Error } from './components/404/404'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Busqueda } from './components/barra de busqueda/busqueda'

import { Pagina1Accion } from './components/accion/1/pagina1accion'
import { Pagina2Accion } from './components/accion/2/pagina2accion'
import { Pagina3Accion } from './components/accion/3/pagina3accion'
import { Pagina4accion } from './components/accion/4/pagina4accion'

import { Rdr2 } from "./components/accion/juegos/1/rdr2"
import { Tlou } from './components/accion/juegos/1/tlou'
import { Tlou2 } from './components/accion/juegos/1/tlou2'
import { Ultrakill } from './components/accion/juegos/1/ultrakill'
import { CodeVein } from './components/accion/juegos/1/CodeVein'
import { Cyberpunk } from './components/accion/juegos/1/cyberpunk'
import { DarkSouls } from './components/accion/juegos/1/darkSouls'
import { DoomEternal } from './components/accion/juegos/1/doomEternal'
import { GTA5 } from './components/accion/juegos/1/gta5'

import { Corto1 } from './components/corto/1/pagina1corto'
import { Pagina2Corto } from './components/corto/2/pagina2corto'
import { Pagina3Corto } from './components/corto/3/pagina3corto'
import { Pagina4Corto } from './components/corto/4/pagina4corto'

import { SD1 } from './components/2D/1/pagina12D'
import { Pagina22D } from './components/2D/2/pagina22D'
import { Pagina32D } from './components/2D/3/pagina32D'
import { Pagina42D } from './components/2D/4/pagina42D'

import { Terror1 } from './components/terror/1/pagina1terror'
import { Pagina2terror } from './components/terror/2/pagina2terror'
import { Pagina3terror } from './components/terror/3/pagina3terror'
import { Pagina4terror } from './components/terror/4/pagina4terror'

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
          {/* rutas de paginas de terror */}
          <Route path='/terror/1' element={<Terror1 />}></Route>
          <Route path='/terror/2' element={<Pagina2terror />}></Route>
          <Route path='/terror/3' element={<Pagina3terror />}></Route>
          <Route path='/terror/4' element={<Pagina4terror />}></Route>
          {/* rutas de juegos de terror */}
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

          {/* rutas de paginas de corto */}
          <Route path='/corto/1' element={<Corto1 />}></Route>
          <Route path='/corto/2' element={<Pagina2Corto />}></Route>
          <Route path='/corto/3' element={<Pagina3Corto />}></Route>
          <Route path='/corto/4' element={<Pagina4Corto />}></Route>
          {/* rutas de juegos de corto */}
          {/* rutas de paginas de 2D */}
          <Route path='/2D/1' element={<SD1 />}></Route>
          <Route path='/2D/2' element={<Pagina22D />}></Route>
          <Route path='/2D/3' element={<Pagina32D />}></Route>
          <Route path='/2D/4' element={<Pagina42D />}></Route>
          {/* rutas de juegos de 2D */}
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
