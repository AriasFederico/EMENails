import './StyleComponents/UserCommentAbout.css'

export const UserCommentAbout = () => {
  return (
    <form className="BoxComment">

      <div className="boxComment-user-email">
        <label htmlFor="nameComment">Nombre:
          <input type="text" name="nameComment" className='name-email-boxcomment'/>
        </label>
      </div>

      <textarea name="boxComment-text" id="boxComment" className='boxComment-text' placeholder='Comentario'></textarea>

      <button type="submit" className='btn-comment'>Enviar comentario</button>
    </form>
  )
}