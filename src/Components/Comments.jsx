import './StyleComponents/Comments.css'
import { UserComments } from './UserComments'
export const Comments = () => {

  return (
    <section className="Comments">
      <h4 className="title-comments">Comentarios y valoraciones</h4>
      <div className='carousel-comments'>
        <UserComments 
        user={'Lucía'} 
        comment={'La verdad muy buena atención y muy lindo lugar, recomiendo al 100'}  className='comment'/>
        <UserComments user={'Romina'} comment={'Atención impecable, el lugar es precioso y el servicio muy bueno'} />
        <UserComments user={'Vero'} comment={'Muy lindo..muy buena atencion'}  className='comment'/>
        <UserComments user={'Maria'} comment={'Es excelente, trabaja con mucha dedicación, muy recomendable!'}  className='comment'/>
      </div>
    </section>
  )
}