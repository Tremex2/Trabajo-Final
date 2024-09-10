import { Inicio } from './components/Pagina inicial/inicio'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Pagina1Accion } from './components/accion/pagina1accion'
import { Corto1 } from './components/corto/pagina1corto'
import { SD1 } from './components/2D/pagina12D'
import { Terror1 } from './components/terror/pagina1terror'
import { PrimeraPersona1 } from './components/primera-persona/pagina1primerapersona'
function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/accion/1' element={<Pagina1Accion/>}></Route>
      <Route path='/corto/1' element={<Corto1/>}></Route>
      <Route path='/2D/1' element={<SD1/>}></Route>
      <Route path='/terror/1' element={<Terror1/>}></Route>
      <Route path='/primera-persona/1' element={<PrimeraPersona1/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
