import './StyleComponents/ResultApi.css'
import iconTick from '../../public/icons/tick.png'

export const ResultApi = () => {

  return (
    <div className='result-status'>
      <p>Solicitud enviada con exito!</p>
      <img src={iconTick} alt="" className='tick'/>
    </div>
  )
}