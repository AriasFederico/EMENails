import './StyleComponents/Carousel.css'
import { Stars } from './Stars'

export const Carousel = () => {

  return (
    <div className="Carousel">
      <div className="banner manicure">
        <a href={'/turns'} className='link-banner' >Agendar</a>
        <p className='title-service'>Servicio de manicuría</p>
        <Stars/>
      </div>

      <div className="carousel-banners">
        <div className='banner banner-carousel pedicure'>
          <a href={'/turns'} className='link-banner' >Agendar</a>
          <p className='title-service-carousel'>Pedicuría</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel hair'>
          <a href={'/turns'} className='link-banner' >Agendar</a>
          <p className='title-service-carousel'>Peluquería</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel smoothing'>
          <a href={'/turns'} className='link-banner' >Agendar</a>
          <p className='title-service-carousel'>Alisados</p>
          <Stars/>
        </div>
        <div className='banner banner-carousel bijouterie'>
          <a href={'/about'} className='link-banner' >Visitar</a>
          <p className='title-service-carousel'>Bijouterie</p>
          <Stars/>
        </div>
      </div>
    </div>
  )
}