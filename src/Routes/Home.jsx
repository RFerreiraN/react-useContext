import { useContext } from 'react'
import { UsuarioContext } from '../Context/UsuarioContext'

export const Home = () => {

  const { usuario } = useContext(UsuarioContext)

  return (
    <>
      <table className="table table-warning">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Primer Apellido</th>
            <th scope="col">Segundo Apellido</th>
            <th scope="col">Email</th>
            <th scope="col">Nickname</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{usuario.nombre}</td>
            <td>{usuario.primerApellido}</td>
            <td>{usuario.segundoApellido}</td>
            <td>{usuario.email}</td>
            <td>{usuario.nickname}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
