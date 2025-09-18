import React from 'react'
import { UsuarioContext } from './UsuarioContext'

const usuario = {
  nombre : 'Ricardo Ferreira',
  email : 'ricardo@ferreira.pt',
  nickname : 'R.Ferreira'
}

export const UsuarioProvider = ({children}) => {
  return (
    <UsuarioContext.Provider value={{usuario}}>
      {children}
    </UsuarioContext.Provider>
  )
}
