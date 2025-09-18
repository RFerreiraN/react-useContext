import { useContext} from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const Home = () => {

  const { usuario } = useContext(UsuarioContext)

  return (
    <>
      <ul>
        <li>{usuario.nombre}</li>
        <li>{usuario.email}</li>
        <li>{usuario.nickname}</li>
      </ul>
    </>
  )
}
