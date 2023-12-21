import './StylePages/Turns.css'
import { ServiceSelected } from '../src/Components/ServiceSelected';
import { useLogicForm } from '../src/hooks/useLogicForm.js';
import { useContext, useEffect } from 'react';
import { TurnsContext } from '../src/Context/TurnsContext.jsx';

export const Turns = () => {
  const {selectedServicesList,
  handleSelectChange, 
  onInputChange, 
  formValue,
  deleteItem, 
  onInputSubmit,
  handleSelectDay,
  handleSelectHour,
  handleSelectCondition} = useLogicForm();

  const {
    name,
    email,
    tel
  } = formValue;

  const {turns} = useContext(TurnsContext)


  return (
    <section className="Turns">
      <h1 className="title-about-mobile">Solicitar Turno</h1>
      <div className="form-turns-container">
        <div className="banner-turns"></div>
        <form className='form' onSubmit={onInputSubmit}>
          <div className="name-email">
            <label htmlFor="name" className='label-name-email'>Nombre:
              <input type="text"
              name="name"
              value={name}
              onChange={onInputChange} />
            </label>

            <label htmlFor="email" className='label-name-email'>Correo:
              <input type="text"
              name="email"
              required
              value={email}
              onChange={onInputChange} />
            </label>

            <label htmlFor="name" className='label-name-email'>Teléfono: <span>221</span>
              <input type="text"
              name="tel"
              value={tel}
              onChange={onInputChange} />
            </label>
          </div>

          <div className="block-condition">
            <span>Presenta alguna condición médica ?</span>
            <select name="condition"  onChange={handleSelectCondition}>
              <option value="Ninguno">Ninguno</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Tratamientod oncologicos">Tratamientos oncologicos</option>
              <option value="Alergias">Alergias</option>
            </select>
          </div>

          <div className="service-options">
            <span className='span-form'>Agregar servicios</span>

            <div className="manicure-service-user">
              <select name="manicure-service" onChange={handleSelectChange} value={'Manicuría'}> asdasd
                <option disabled value='Manicuría'>Manicuría</option>
                <option value="Belleza de manos">+ Belleza de manos</option>
                <option value="Esmaltado tradicional">+ Esmaltado tradicional</option>
                <option value="Esmaltado semi">+ Esmaltado semi</option>
                <option value="Softgel basico">+ Soft-gel Básico</option>
                <option value="Softgel simple">+ Soft-gel Simple</option>
                <option value="Softgel completo">+ Soft-gel Completo</option>
                <option value="Kapping básico">+ Kapping Básico</option>
                <option value="Kapping simple">+ Kapping Simple</option>
                <option value="Kapping completo">+ Kapping Completo</option>
              </select>

              <select name="pedicure-service" onChange={handleSelectChange} value={'Pedicuría'}>
                <option disabled value='Pedicuría'>Pedicuría</option>
                <option value="Belleza de pies">+ Belleza de pies</option>
                <option value="Decoracion de pies básicos">+ Decoracion de pies básicos</option>
                <option value="Decoracion de pies + semi">+ Decoracion de pies + semi</option>
              </select>

              <select name="hair-service" onChange={handleSelectChange} value={'Peluquería'}>
                <option disabled value='Peluquería'>Peluquería</option>
                <option value="Corte simple">+ Corte simples</option>
                <option value="Alisado">+ Alisado</option>
                <option value="Botox">+ Botox</option>
                <option value="Tintura (de EMENails)">+ Tintura (de EMENails)</option>
                <option value="Tintura (del cliente)">+ Tintura (del cliente)</option>
              </select>

              <select name="remove-service" onChange={handleSelectChange} value={'Remover'}>
                <option disabled value='Remover'>Remover</option>
                <option value="Remover Semipermanente">+ Semipermanente</option>
                <option value="Remover Kapping">+ Kapping (ajeno)</option>
                <option value="Remover Soft-gel">+ Soft-gel</option>
                <option value="Remover Esculpidas">+ Esculpidas</option>
              </select>

            </div>

            <div className="container-services-user">
              <span className='span-form-services-s'>Servicios deseados</span>
              <div className="services-user">
              {
                selectedServicesList && selectedServicesList.map((item, index) => {
                  return (
                    <ServiceSelected service={item} key={index} functionDelete={deleteItem} />
                  );
                })
              }
              </div>
            </div>
          </div>

          <div className="hour-day">
            <div className="day">
              <span className='span-form'>Días disponibles</span>
              <select name="day" onChange={handleSelectDay}>
                <option value="lunes">Lunes</option>
                <option value="martes">Martes</option>
                <option value="miercoles">Miércoles</option>
                <option value="jueves">Jueves</option>
                <option value="viernes">Viernes</option>
              </select>
            </div>

            <div className="hour">
              <span className='span-form'>Horas disponibles</span>
              <select name="hour" onChange={handleSelectHour}>
                <option value="9:30">09:30</option>
                <option value="14:30">14:30</option>
                <option value="16:00">16:00</option>
                <option value="17:30">17:30</option>
                <option value="19:30">19:30</option>
              </select>
            </div>
          </div>

          <button type="submit"
          className='btn-submit'
          >Solicitar turno</button>

        </form>
      </div>

      <p>{turns.name}</p>
      <p>{turns.condition}</p>
      <p>{turns.services}</p>
      <p>{turns.day}</p>
      <p>{turns.hour}</p>


      <div className="turns-paragraphs">
        <h2>Términos y detalles importantes para su turno</h2>

        <p>Estaremos encantados de recibirle y proporcionarle nuestro servicio. Sin embargo, es importante señalar que el tiempo máximo de espera después del horario programado es de 20 minutos. Después de ese periodo, lamentablemente, su turno será considerado como no asistido.</p>

        <p>Una vez que haya completado el proceso de solicitud de turno con éxito, la información detallada de su turno estará disponible en la sección de <a href="/">inicio</a> de nuestra plataforma. Además, recibirá un correo electrónico en la dirección proporcionada durante el registro con todos los detalles necesarios.</p>

        <p>Entendemos que pueden surgir imprevistos, y si experimenta algún problema para cancelar su turno desde la sección de inicio, le pedimos amablemente que se comunique con nosotros. Estamos para ayudarle y asegurarnos de que su experiencia sea lo más conveniente posible.</p>

        <p>Le agradecemos nuevamente por elegirnos y confiar en nuestros servicios. Esperamos con entusiasmo atenderle en el horario programado.</p>

        <p>Atentamente</p>
        
        <h3>EMENails</h3>
      </div>
    </section>
  )
}