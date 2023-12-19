import './StyleComponents/ServiceSelected.css'
import iconDelete from '../../public/icons/icon-delete.png'

export const ServiceSelected = ({service, functionDelete}) => {
  return (
    <div className="ServiceSelected">
      <p>{service}</p>
      <img src={iconDelete} alt="" className='icon-delete' onClick={()=> functionDelete()}/>
    </div>
  )
}