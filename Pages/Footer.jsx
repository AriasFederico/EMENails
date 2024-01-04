import './StylePages/Footer.css'
import { NavLink } from 'react-router-dom'

import iconMasterCard from '../public/icons/iconMasterCard.png'
import iconVisa from '../public/icons/iconVisa.png'
import iconAmerican from '../public/icons/iconAmerican.png'
import iconMercado from '../public/icons/iconMercado.png'
import iconDni from '../public/icons/iconDni.png'

import iconWsp from '../public/icons/icon-wsp.png'
import iconFb from '../public/icons/icon-fb.png'
import iconIg from '../public/icons/icon-ig.png'

export const Footer = () => {
  return (
    <footer className="Footer">
      <div className="footer-width">
        <div className="atribuciones-contacto-container">
          <NavLink to='/about'className='link-footer' >Sobre EMENails</NavLink>
          <p className='p-footer'>Calle 57 e/ 139 y 140 - número 13</p>
          <p className='p-footer'>Atribuciones de imagenes: <a className='link-footer' href='https://www.freepik.es/search?format=search&last_filter=query&last_value=manicuria&query=manicuria'>Freepick</a></p>
          
        <a href='https://www.instagram.com/arias.fede99/' className='link-footer' >Desarrollado por F.A</a>

          <div className="links-social-enable">
             <a href="https://wa.me/2214547130"><img src={iconWsp} alt="" className='icon-social-footer'/></a>
             <a href="https://www.facebook.com/emenails.25"><img src={iconFb} alt="" className='icon-social-footer'/></a>
             <a href="https://www.instagram.com/emenails25/"><img src={iconIg} alt="" className='icon-social-footer'/></a>
          </div>

          <div className="metod-footer">
            <img src={iconMasterCard} alt="" className='icon-price-footer'/>
            <img src={iconVisa} alt="" className='icon-price-footer'/>
            <img src={iconAmerican} alt="" className='icon-price-footer'/>
            <img src={iconMercado} alt="" className='icon-price-footer'/>
            <img src={iconDni} alt="" className='icon-price-footer'/>
          </div>
        </div>

      </div>
    </footer>
  )
}