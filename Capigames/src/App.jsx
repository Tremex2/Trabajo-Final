import { Inicio } from './components/Pagina inicial/inicio'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Pagina1Accion } from './components/accion/1/pagina1accion'
import { Pagina2Accion } from './components/accion/2/pagina2accion'
import { Corto1 } from './components/corto/1/pagina1corto'
import { SD1 } from './components/2D/1/pagina12D'
import { Terror1 } from './components/terror/1/pagina1terror'
import { PrimeraPersona1 } from './components/primera-persona/1/pagina1primerapersona'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>

      <Route path='/terror/1' element={<Terror1/>}></Route>
      <Route path='/terror/2' element={<Inicio/>}></Route>
      <Route path='/terror/3' element={<Inicio/>}></Route>
      <Route path='/terror/4' element={<Inicio/>}></Route>

      <Route path='/accion/1' element={<Pagina1Accion/>}></Route>
      <Route path='/accion/2' element={<Pagina2Accion/>}></Route>
      <Route path='/accion/3' element={<Inicio/>}></Route>
      <Route path='/accion/4' element={<Inicio/>}></Route>

      <Route path='/corto/1' element={<Corto1/>}></Route>
      <Route path='/corto/2' element={<Inicio/>}></Route>
      <Route path='/corto/3' element={<Inicio/>}></Route>
      <Route path='/corto/4' element={<Inicio/>}></Route>

      <Route path='/2D/1' element={<SD1/>}></Route>
      <Route path='/2D/2' element={<Inicio/>}></Route>
      <Route path='/2D/3' element={<Inicio/>}></Route>
      <Route path='/2D/4' element={<Inicio/>}></Route>
      
      <Route path='/primera-persona/1' element={<PrimeraPersona1/>}></Route>
      <Route path='/primera-persona/2' element={<Inicio/>}></Route>
      <Route path='/primera-persona/3' element={<Inicio/>}></Route>
      <Route path='/primera-persona/4' element={<Inicio/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
