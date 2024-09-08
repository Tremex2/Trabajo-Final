import { Inicio } from './components/Pagina inicial/inicio'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Pagina1Accion } from './components/pagina-1-accion/pagina1accion'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/pagina-1/accion' element={<Pagina1Accion/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
