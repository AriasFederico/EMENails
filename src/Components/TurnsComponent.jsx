import { useContext } from 'react';
import { useLogicForm } from '../hooks/useLogicForm'
import './StyleComponents/TurnsComponent.css'

import iconDay from '../../public/icons/icon-day.png'
import iconHour from '../../public/icons/icon-hour.png'
import iconService from '../../public/icons/icon-service.png'
import iconTurns from '../../public/icons/icon-turn.png'


export const TurnsComponent = ({index, name, day, hour, service}) => {

  const {deleteItem} = useLogicForm();

  return (
    <div className="turn-container">
      <div className="turn-title-icon">
        <img src={iconTurns} className='icon-info'/>
        <span className='span-name-turn'>{name.toUpperCase()}</span>
      </div>

      <div className="infoTurn">
        <div className="info-day info-flex">
          <img src={iconDay} className='icon-info' alt='Día' />
          <p className='day-hour-p'>{day}</p>
        </div>

        <div className="info-hour info-flex">
          <img src={iconHour} className='icon-info' />
          <p className='day-hour-p'>{hour}</p>
        </div>

        <div className="info-services info-flex">
          <img src={iconService} className='icon-info service-icon' />
          <p className='day-hour-p'>{service}</p>
        </div>
      </div>
      
      <div className="btn-delete-turn-container">
        <button className='btn-delete-turn' onClick={()=> deleteItem(index)}>Cancelar turno</button>
      </div>
    </div>
  )
}