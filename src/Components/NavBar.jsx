import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
      <nav className="navbar navbar-expand-lg bg-warning">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">ShoppingOnline</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link" aria-current="page">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/productos'} className="nav-link">Productos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/carrito'} className="nav-link">Carrito</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/login'} className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
