import './StyleComponents/Carousel.css'
import { Stars } from './Stars'
import { NavLink } from 'react-router-dom'

export const Carousel = () => {

  const handleMenu = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className="Carousel">
      <div className="banner manicure">
        <NavLink to={'/turns'} className='link-banner' onClick={handleMenu}>AGENDAR</NavLink>
        <p className='title-service-carousel'>Servicio de manicuría</p>
        <Stars/>
      </div>

      <div className="carousel-banners">
        <div className='banner banner-carousel pedicure'>
          <NavLink to={'/turns'} className='link-banner' onClick={handleMenu} >AGENDAR</NavLink>
          <p className='secundary'>Pedicuría</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel hair'>
          <NavLink to={'/turns'} className='link-banner' onClick={handleMenu} >AGENDAR</NavLink>
          <p className='secundary'>Peluquería</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel smoothing'>
          <NavLink to={'/turns'} className='link-banner' onClick={handleMenu} >AGENDAR</NavLink>
          <p className='secundary'>Alisados</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel bijouterie'>
          <NavLink to={'/about'} className='link-banner' onClick={handleMenu} >VISITAR</NavLink>
          <p className='secundary'>Bijouterie</p>
          <Stars/>
        </div>
      </div>
    </div>
  )
}