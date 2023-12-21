import { NavLink } from 'react-router-dom'
import iconArrow from '../../public/icons/icon-arrow.png'
import './StyleComponents/PricesTurns.css'
import { TurnsContext } from '../Context/TurnsContext.jsx'
import { useContext, useEffect } from 'react'

export const PricesTurns = () => {

  const {turns} = useContext(TurnsContext);

  return (
    <section className='PricesTurns'>
      <div className="prices">
        <h2 className='title-prices'>Manicuría, peluquería y bijouterie</h2>
        <p className='paragraph-prices'>Todo en un mismo lugar !</p>
        <p className='prices-p'>Te esperamos en EMENails, donde tu belleza es nuestra prioridad</p>
        <p className='prices-p'>Consulta nuestros precios y pedí tu turno</p>
        <div className="prices-animation">
          <img src={iconArrow} alt=""
          className='icon-arrow' />
          <a href={'/pricing'} className='prices-arrow'>Precios</a>
        </div>
      </div>


      <aside className='myturns'>
        <div className="title-icon-myturns">
          <h3 className='title-myturns'>Mis turnos</h3>
        </div>
      </aside>
    </section>
  )
}