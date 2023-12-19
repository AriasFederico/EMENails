import './StylePages/Footer.css'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-width">
        <div className="atribuciones-contacto-container">
          <NavLink to='/' className='link-footer' >Atribuciones</NavLink>
          <NavLink to='/about'className='link-footer' >Contacto</NavLink>
        </div>

        <NavLink to='/' className='link-footer' >Desarrollado por F.A</NavLink>
      </div>
    </footer>
  )
}