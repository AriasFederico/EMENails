import './StylePages/About.css'
import iconArrow from '../public/icons/icon-arrow.png'
import iconDirection from '../public/icons/icon-direction.png'
import iconTel from '../public/icons/icon-tel.png'
import iconGmail from '../public/icons/icon-email.png'
import { UserCommentAbout } from "../src/Components/UserCommentAbout"


export const About = () => {


  return (
    <section className="About">
      <div className="about-mobile">
        <div className="presentation">
          <h1 className="title-about-mobile">Un poco sobre EMENails</h1>
          
          <div className="arrow-paragraph">
            <img src={iconArrow} alt="" className="icon-arrow-paragraph"/>
            <p className="paragraph-about one"> Tu lugar de confianza para el cuidado integral de tu belleza. Soy Marcela, especialista en servicios de peluquería y uñas</p>
          </div>
          

          <div className="arrow-paragraph">
            <img src={iconArrow} alt="" className="icon-arrow-paragraph"/>
            <p className="paragraph-about two">En mi salón, vas a encontrar un ambiente acogedor donde te voy a brindar cortes de cabello simples y tratamientos capilares rejuvenecedores para resaltar tu bellza natural.</p>
          </div>
          
          <div className="arrow-paragraph">
            <img src={iconArrow} alt="" className="icon-arrow-paragraph"/>
            <p className="paragraph-about three">Además, mis servicios de uñas te van a permitir disfrutar de diseños creativos y un cuidado impecable para tus manos.</p>
          </div>
        </div>

        <div className="image-contact flex-pc-image">
          <div className="image-emenails"></div>
          <div className="container-directions">
            <div className="direction-container">
              <h3>Dónde estamos?</h3>
              <div className="icon-flex">
                <img src={iconDirection} alt="" className="icon-direction"/>
                <span className="value-icon">57 e/ 139 y 140 - número 13</span>
              </div>
            </div>

            <div className="direction-container">
              <h3>Contacto</h3>
              <div className="icon-flex">
                <img src={iconTel} alt="" className="icon-direction tel"/>
                <span className="value-icon">221 4547130</span>
              </div>
              <div className="icon-flex">
                <img src={iconGmail} alt="" className="icon-direction"/>
                <span className="value-icon">aliano.marcela@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="component-comments-user-container">
        <h2>Dejanos un comentario sobre tu experiencia en EMENails!</h2>
        <UserCommentAbout/>
      </div>
    </section>
  )
}