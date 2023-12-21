import './StyleComponents/NavBar.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

import iconBurguer from '../../public/icons/burguer-mobile.png'
import iconBurguerX from '../../public/icons/burguer-mobile-X.png'
import iconEmenails from '../../public/icons/iconEMENails.png'

import iconWsp from '../../public/icons/icon-wsp.png'
import iconFb from '../../public/icons/icon-fb.png'
import iconIg from '../../public/icons/icon-ig.png'

import iconChristmas from '../../public/icons/christmas/icon-tree.png'


export const NavBar = () => {

  const [burguerState, setBurguerState] = useState(false);

  const handleMenu = () => {
    setBurguerState(!burguerState)
  }

  return (
    <header className='NavBar'>
        <nav className={`menu-mobile`}>
          <img src={iconBurguer} 
          alt="Burguer menú" 
          className='burguer-menu'
          onClick={handleMenu} />

          <NavLink to='/' className='title-menu-mobile'><span className='span-menu-mobile-enable'>EMENails</span></NavLink>          

          <NavLink to='/' ><img src={iconEmenails} alt="EMENails" className='icon-emenails'/></NavLink>
        </nav>

        <nav className={burguerState ? 'menu-mobile-enable' : 'display-menu-mobile-enable'}>
          <div className="burguerx-icon">
            <img src={iconBurguerX} 
            alt="Burguer menu x"
            className='burguer-menu-x'
            onClick={handleMenu} />

            <div className="links-social-enable">
             <a href="https://wa.me/2214547130"><img src={iconWsp} alt="" className='icon-social'/></a>
             <a href="https://www.facebook.com/emenails.25"><img src={iconFb} alt="" className='icon-social'/></a>
             <a href="https://www.instagram.com/emenails25/"><img src={iconIg} alt="" className='icon-social'/></a>
            </div>

            <NavLink to='/' ><img src={iconEmenails} alt="EMENails" className='icon-emenails'onClick={handleMenu} /></NavLink>
          </div>

          <div className="links-menu-enable">
            <NavLink to={'/'} className='link-enable' onClick={handleMenu}>INICIO</NavLink>
            <NavLink to={'/turns'} className='link-enable' onClick={handleMenu}>TURNOS</NavLink>
            <NavLink to={'/pricing'} className='link-enable' onClick={handleMenu}>PRECIOS</NavLink>
            <NavLink to={'/about'} className='link-enable' onClick={handleMenu}>SOBRE EMENAILS</NavLink>

            <img src={iconChristmas} alt="" className='icon-tree'/>
          </div>
        </nav>

        <nav className="menu-pc-media">
          <div className="menu-pc">
            <div className="icon-title">
              <NavLink to='/' className='link-page-pc' >
                <img src={iconEmenails} alt="EMENails" className='icon-emenails-pc'/>
              </NavLink>
              <NavLink to='/' className='link-page-pc' >
                <span className='title-menu-pc'>EMENails</span>
              </NavLink>

              <img src={iconChristmas} alt="Christmas" className='icon-tree'/>
            </div>

            <div className="links-links-pc">
              <div className="links-page-pc">
                <NavLink to='/' className={({isActive}) => (isActive ? 'active-select' : 'link-page-pc')} >INICIO</NavLink>
                <NavLink to='/turns' className={({isActive}) => (isActive ? 'active-select' : 'link-page-pc')} >TURNOS</NavLink>
                <NavLink to='/pricing' className={({isActive}) => (isActive ? 'active-select' : 'link-page-pc')} >PRECIOS</NavLink>
                <NavLink to='about' className={({isActive}) => (isActive ? 'active-select' : 'link-page-pc')} >SOBRE EMENAILS</NavLink>
              </div>

              <div className="links-social-pc">
                <a href="https://wa.me/2214547130"><img src={iconWsp} alt="" className='icon-social-pc'/></a>
                <a href="https://www.facebook.com/emenails.25"><img src={iconFb} alt="" className='icon-social-pc'/></a>
                <a href="https://www.instagram.com/emenails25/"><img src={iconIg} alt="" className='icon-social-pc'/></a>
              </div>
            </div>
          </div>
        </nav>

    </header>
  )
}