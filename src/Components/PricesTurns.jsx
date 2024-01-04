import './StyleComponents/PricesTurns.css'
import { TurnsContext } from '../Context/TurnsContext.jsx'
import { useContext } from 'react'
import {TurnsComponent} from './TurnsComponent.jsx'
import { useLogicForm } from '../hooks/useLogicForm.js'

import bannerPrices from '../../public/images/banner-turns.jpg'

export const PricesTurns = () => {

  const {turns} = useContext(TurnsContext);

  const {
    deletedTurn
  } = useLogicForm()

  return (
    <section className='PricesTurns'>
      <div className="prices">
        <div className="title-layer">
            <p className='title-prices-p'>PODÉS DISFRUTAR</p>
            <div className="line-title"></div>
        </div>
        <h1 className='h1-prices-turns'>
          Manicuría, peluquería y bijouterie, todo en un mismo lugar!
        </h1>

        <div className="banner-prices-container"></div>

        <div className="prices-btn-p">
          <p className='p-banner'>Descubrí la conveniencia y la atención personalizada en cada visita. Consulta los precios y solicita tu turno para disfrutar de una experiencia de belleza única, diseñada especialmente para vos</p>
          <a href="/pricing" className='link-prices'>Precios</a>
        </div>
      </div>

      <aside className='myturns'>
        <div className="turns">
          <div className="title-layer">
              <p className='title-prices-p'>INFORMACIÓN DE TURNOS</p>
              <div className="line-title"></div>
          </div>
          
          <div className="container-turns">
          {
            turns < 1
            ? <div className='no-turns-container'>
                <div className="no-turns">
                  <p>No tenes turnos solicitados</p>
                  <a href="/turns" className='btn-turns-request'>AGREGAR TURNO</a>
                </div>
                <div className="no-turns"></div>
                <div className="no-turns"></div>
                <div className="no-turns"></div>

                </div>
            : <div className="turns-component">
                  {turns.map((turn, index) => (
                    <TurnsComponent key={index}
                    name={turn.name}
                    day={turn.day}
                    hour={turn.hour}
                    service={turn.service}
                    index={index}
                    />
                  ))}
                </div>
          }
          </div>
        </div>
      </aside>
    </section>
  )
}