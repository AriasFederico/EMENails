import './StylePages/About.css'
import iconArrow from '../public/icons/icon-arrow.png'
import iconDirection from '../public/icons/icon-direction.png'
import iconTel from '../public/icons/icon-tel.png'
import iconGmail from '../public/icons/icon-email.png'
import { UserCommentAbout } from "../src/Components/UserCommentAbout"

import imageEmenailsOne from '../public/images/image-emenails-3.jpg'
import imageEmenailsTwo from '../public/images/image-emenails2.jpg'
import imageEmenailsThree from '../public/images/image-emenails1.jpg'


export const About = () => {


  return (
    <section className="About">
      <div className="about-mobile">
        <div className="presentation">
          <h1 className="title-about-mobile">Un poco sobre EMENails</h1>
          
          <div className="paragraph">
            <p className="paragraph-about one"> Tu lugar de confianza para el cuidado integral de tu belleza. Soy Marcela, especialista en servicios de peluquería y uñas</p>
          </div>
          

          <div className="paragraph">
            <p className="paragraph-about two">En mi salón, vas a encontrar un ambiente acogedor donde te voy a brindar cortes de cabello simples y tratamientos capilares rejuvenecedores para resaltar tu bellza natural.</p>
          </div>
          
          <div className="paragraph">
            <p className="paragraph-about three">Además, mis servicios de uñas te van a permitir disfrutar de diseños creativos y un cuidado impecable para tus manos.</p>
          </div>
        </div>        
      </div>

      <div className="direction-container">
        <div className="title-direction">
          <h3 className='title-direction-h3'>Dónde estamos ?</h3>
          <div className="direction-icon-flex">
            <img src={iconDirection} alt="direction" className='icon-direction'/>
            <p>57 e/ 139 y 140 - número 13</p>
          </div>
        </div>

        <div className="title-direction">
          <h3 className="title-direction-h3">Contacto</h3>
          <div className="direction-icon-flex">
            <img src={iconTel} alt="tel" className='icon-direction'/>
            <p>221 4547130</p>
          </div>

          <div className="direction-icon-flex">
            <img src={iconGmail} alt="email" className='icon-direction'/>
            <p>marcefabialiano@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="image-contact-container-flex">
        <div className="images-emenails">
          <img src={imageEmenailsTwo} className='images-emenails-jpg'/>
          <img src={imageEmenailsOne} className='images-emenails-jpg'/>
          <img src={imageEmenailsThree} className='images-emenails-jpg'/>
        </div>
      </div>

      <div className="component-comments-user-container">
        <h2 className='title-comment-user-container'>Dejanos un comentario sobre tu experiencia en EMENails!</h2>
        <UserCommentAbout/>
      </div>
    </section>
  )
}