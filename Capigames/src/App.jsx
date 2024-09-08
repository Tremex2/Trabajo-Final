import { Inicio } from './components/Pagina inicial/inicio'
import {BrowserRouter, Routes ,Route} from "react-router-dom"
import { Menu } from './components/Menu/menu'
import { Pagina1 } from './components/pagina 1/pagina1'

function App() {

  return (
    <>
    <BrowserRouter>
    <Menu/>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
      <Route path='/pagina-1' element={<Pagina1/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
