import { NavBar } from './Components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Home } from './Routes/Home'
import { Productos } from './Routes/Productos'
import { Carrito } from './Routes/Carrito'
import { Login } from './Routes/Login'
import { UsuarioContext } from './Context/UsuarioContext'
import { UsuarioProvider } from './Context/UsuarioProvider'

export const App = () => {
  return (
    <UsuarioProvider>
      <NavBar/>
        <Routes>
          <Route path='/' element={ <Home/>}></Route>
          <Route path='/productos' element={ <Productos/> }></Route>
          <Route path='/carrito' element={ <Carrito/> }></Route>
          <Route path='/login' element={ <Login/>}></Route>
          <Route path='/*' element={  <Navigate to='/'/> }></Route>
        </Routes>
    </UsuarioProvider>
  )
}
