import { Inicio } from './components/Pagina inicial/inicio'
import { Error } from './components/404/404'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Menu } from './components/Menu/menu'

import { Pagina1Accion } from './components/accion/1/pagina1accion'
import { Pagina2Accion } from './components/accion/2/pagina2accion'
import { Pagina3Accion } from './components/accion/3/pagina3accion'
import { Pagina4accion } from './components/accion/4/pagina4accion'

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
function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/*' element={<Error/>}></Route>
 
      <Route path='/terror/1' element={<Terror1/>}></Route>
      <Route path='/terror/2' element={<Pagina2terror/>}></Route>
      <Route path='/terror/3' element={<Pagina3terror/>}></Route>
      <Route path='/terror/4' element={<Pagina4terror/>}></Route>

      <Route path='/accion/1' element={<Pagina1Accion/>}></Route>
      <Route path='/accion/2' element={<Pagina2Accion/>}></Route>
      <Route path='/accion/3' element={<Pagina3Accion/>}></Route>
      <Route path='/accion/4' element={<Pagina4accion/>}></Route>

      <Route path='/corto/1' element={<Corto1/>}></Route>
      <Route path='/corto/2' element={<Pagina2Corto/>}></Route>
      <Route path='/corto/3' element={<Pagina3Corto/>}></Route>
      <Route path='/corto/4' element={<Pagina4Corto/>}></Route>

      <Route path='/2D/1' element={<SD1/>}></Route>
      <Route path='/2D/2' element={<Pagina22D/>}></Route>
      <Route path='/2D/3' element={<Pagina32D/>}></Route>
      <Route path='/2D/4' element={<Pagina42D/>}></Route>
      
      <Route path='/primera-persona/1' element={<PrimeraPersona1/>}></Route>
      <Route path='/primera-persona/2' element={<Pagina2primerapersona/>}></Route>
      <Route path='/primera-persona/3' element={<Pagina3primerapersona/>}></Route>
      <Route path='/primera-persona/4' element={<Pagina4primerapersona/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
