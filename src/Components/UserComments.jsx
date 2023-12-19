import './StyleComponents/UserComments.css'
import iconQuates from '../../public/icons/icon-coments.png'
import iconUser from '../../public/icons/icon-user.png'
import { Stars } from './Stars'
export const UserComments = ({user, comment}) => {
  return (
    <div className="comment-container">
      <div className="comment-user">
        <div className="quates-stars">
          <img src={iconQuates} alt="" className='icon-quates'/>
          <Stars/>
        </div>

        <p className='comment'>{comment}</p>

        <div className="user-icon">
          <img src={iconUser} alt="" className='icon-user' />
          <span className="username">{user}</span>
        </div>
      </div>
    </div>
  )
}