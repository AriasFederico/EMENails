import './StylePages/Turns.css'
import { useLogicForm } from '../src/hooks/useLogicForm.js';
import { useContext, useEffect, useRef, useState } from 'react';
import { TurnsContext } from '../src/Context/TurnsContext.jsx';
import { NavLink } from 'react-router-dom';
import { IsLoadingComponent } from '../src/Components/IsLoadingComponent.jsx';
import { ResultApi } from '../src/Components/ResultApi.jsx';

export const Turns = () => {
  const {
  selectedServicesList,
  handleSelectChange, 
  onInputChange, 
  formValue,
  onInputSubmit,
  handleSelectDay,
  handleSelectHour,
  handleSelectCondition,
  formRef,
  handleSelectClear,  
  isLoading,
  resultApi
} = useLogicForm();

  const [questState, setQuestState] = useState(false);

  const {
    name,
    email,
    tel
  } = formValue;

  const handleMenu = () => {
    window.scrollTo(0,0);
  }

  const handleQuestState = (e) => {
    e.preventDefault()
    setQuestState(!questState)
  }


  const {turns, setTurns} = useContext(TurnsContext)

  useEffect(() => {
    // Asegúrate de que "turns" esté definido antes de acceder a sus propiedades
    if (turns === undefined) {
      setTurns([]);
    }
  }, [turns, setTurns]);

  return (
    <section className="Turns">
      <div className="form-turns-container">
        <div className="banner-turns"></div>
        <form className='form' onSubmit={onInputSubmit} ref={formRef}>
          <div className="name-email">
            <label htmlFor="name" className='label-name-email'>Nombre:
              <input type="text"
              name="name"
              value={name}
              onChange={onInputChange}
              required />
            </label>

            <label htmlFor="tel" className='label-name-email'>Teléfono: <span className='hash'>221</span>
              <input type="text"
              name="tel"
              value={tel}
              onChange={onInputChange}
              required />
            </label>
          </div>

          <div className="block-condition">
            <span>Presenta alguna condición médica ?</span>
            <select name="condition"  onChange={handleSelectCondition}>
              <option value="Ninguno">Ninguno</option>
              <option value="Diabetes">Diabetes</option>
              <option value="Tratamientos oncologicos">Tratamientos oncologicos</option>
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
              <span className='span-form'>Servicios deseados</span>
              <div className="services-user">
              {selectedServicesList && selectedServicesList}
              </div>
              <div className="services-user-clear">
                <button className='bt-clear-services-user' onClick={handleSelectClear}>Limpiar</button>
              </div>
            </div>
          </div>

          <div className="hour-day">
            <div className="day">
              <span className='span-form'>Días disponibles</span>
              <select name="day" onChange={handleSelectDay}>
                <option value="Lunes">Lunes</option>
                <option value="Martes">Martes</option>
                <option value="Miercoles">Miércoles</option>
                <option value="Jueves">Jueves</option>
                <option value="Viernes">Viernes</option>
              </select>
              <div className='text-quest-container'>
                <div className={questState ? "text-quest" : 'quest-display-none'} >
                  <p>
                    Si selecciona un turno para un día específico y ese día es posterior al día actual, su turno se programará para la próxima instancia de ese día disponible. Por ejemplo, si hoy es lunes y elige un turno para el martes, recibirá su turno el mismo martes.
                  </p>
                  <p>
                    No obstante, si hoy es lunes y decide programar un turno para el mismo lunes, su turno se programará para el lunes de la semana siguiente. Esta medida se toma para asegurar una programación justa y ordenada, permitiendo que los turnos se asignen de manera equitativa.
                  </p>
                </div>
                <button className={questState ? 'btn-quest-active' : 'btn-quest'} onClick={handleQuestState}>?</button>
              </div>

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

          {isLoading && <IsLoadingComponent/>}
          {resultApi && <ResultApi/>}
        </form>

      </div>

      <div className="turns-paragraphs">


        <h2>Términos y detalles importantes para su turno</h2>

        <p>
          Estaremos encantados de recibirle y proporcionarle nuestro servicio. Sin embargo, es importante señalar que el tiempo máximo de espera después del horario programado es de 20 minutos. Después de ese periodo, lamentablemente, su turno será considerado como no asistido.
        </p>

        <p>
          Le agradecemos nuevamente por elegirnos y confiar en nuestros servicios. Esperamos con entusiasmo atenderle en el horario programado.
        </p>

        <p>Atentamente</p>
        
        <h3>EMENails</h3>

        <div className="details-container">
          <details className='details'>
            <summary className='details-summary'>¿Dónde veo la información de mi turno?</summary>
              <p className='details-summary-p'>
                Después de completar el proceso de solicitud de turno con éxito, la información detallada
                estará disponible en la sección de <NavLink to='/' onClick={handleMenu}>Inicio</NavLink> de nuestra plataforma. También puede acceder
                a los detalles directamente en su dispositivo, ya que la información se guarda localmente
                para su conveniencia.
              </p>
          </details>

          <details className='details'>
            <summary className='details-summary'>¿Cómo cancelo mi turno?</summary>
            <p className='details-summary-p'>
              Para cancelar su turno, simplemente vaya a la sección de inicio de nuestra plataforma
              y busque la opción de cancelar turno. Si encuentra algún problema, no dude en 
              comunicarse con nosotros para obtener asistencia.
            </p>
          </details>
        </div>
      </div>
    </section>
  )
}

