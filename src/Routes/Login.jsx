import { useContext } from 'react';
import { UseForm } from '../Hooks/UseForm';
import { UsuarioContext } from '../Context/UsuarioContext';

export const Login = () => {

  const initialForm = {
    nombre: '', 
    primerApellido : '',
    segundoApellido : '',
    email: '',
    nickname: ''
  }
  const { usuario, setUsuario } = useContext(UsuarioContext)
  const { formState, handleInput} = UseForm(initialForm)
  const { nombre, email, primerApellido, segundoApellido, nickname } = formState;
  const onSubmitForm = (event) => {
    event.preventDefault()
    if (Object.values(formState).some(item => item.trim() === '')) return
    setUsuario(formState)
  }


  return (
  
    <form onSubmit={onSubmitForm} className='container'>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          className="form-control"
          name="nombre"
          value={nombre}
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Primer Apellido</label>
        <input
          type="text"
          className="form-control"
          name="primerApellido"
          value={primerApellido}
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Segundo Apellido</label>
        <input
          type="text"
          className="form-control"
          name="segundoApellido"
          value={segundoApellido}
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={handleInput}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="nickname" className="form-label">Nickname</label>
        <input
          type="text"
          className="form-control"
          name="nickname"
          value={nickname}
          onChange={handleInput}
        />
      </div>
      <button type="submit" className="btn btn-warning">Registrar Usuario</button>
    </form>
  )
}
