import { useContext, useState,useRef, useEffect } from "react";
import { TurnsContext } from "../Context/TurnsContext.jsx";
import emailjs from 'emailjs-com';

export const useLogicForm = () => {
  const { turns, setTurns } = useContext(TurnsContext);

  const formRef = useRef()

  const [formValue, setFormValue] = useState({
    name: '',
    email: '',
    tel: ''
  });

  const [selectedServicesList, setSelectedServicesList] = useState('');
  const [selectedDay, setSelectedDay] = useState('Lunes');
  const [selectedHour, setSelectedHour] = useState('9:30');
  const [selectedCondition, setSelectedCondition] = useState('Ninguno');

  const [isLoading, setIsLoading] = useState(false);
  const [resultApi, setResultApi] = useState(false);

  const [deletedTurn, setDeletedTurn] = useState(false);

  const handleSelectChange = (e) => {
    const newService = e.target.value;
    setSelectedServicesList((prevServices) => {
      return prevServices ? `${prevServices}  /  ${newService}` : newService;
    });
    e.target.selectedIndex = 0;
  }

  const handleSelectClear = (e) => {
    e.preventDefault()
    setSelectedServicesList('')
  }

  const handleSelectDay = (e) => {
    setSelectedDay(e.target.value);
  }

  const handleSelectHour = (e) => {
    setSelectedHour(e.target.value);
  }

  const handleSelectCondition = (e) => {
    const newValue = e.target.value;
    setSelectedCondition(() => {
      return newValue;
    });
  }

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const deleteItem = async (index) => {    
    const canceledTurn = turns[index];

    const userConfirmed = window.confirm('¿Estás segura de que deseas cancelar el turno?');
    if (!userConfirmed) {
        return;
    }

    try {
      setIsLoading(true);
      const result = await emailjs.send(
        "service_muu285h",
        "template_cjvogak",
        {
          name: canceledTurn.name,
          tel: canceledTurn.tel,
          day: canceledTurn.day,
          hour: canceledTurn.hour,
        },
        "Y-InVZhwcqF1MreUr"
      );

      console.log(result.text);

      if(result.status === 200){
        const newTurns = turns.filter((_, i) => i !== index);
        setDeletedTurn(true)
        setTurns(newTurns);
      } else {
        return
      }
    
      setTimeout(()=> {
        setDeletedTurn(false)
      }, 4000)

      

    } catch (error) {
      console.error('Error al enviar el correo de cancelación:', error);
    }
  }

  const resetStates = () => {
    setFormValue({
      name: '',
      email: '',
      tel: ''
    })
    setSelectedServicesList('')
    setSelectedHour('9:30')
    setSelectedCondition('Ninguno')
  }

  const onInputSubmit = async (e) => {
    e.preventDefault();
  
    const newTurn = {
      name: formValue.name,
      tel: formValue.tel,
      day: selectedDay,
      hour: selectedHour,
      service: selectedServicesList,
      condition: selectedCondition,
    };
  
    await setTurns((prevTurns) => [...prevTurns, newTurn]);
  
    const {
      name,
      service,
      tel,
      day,
      hour,
      condition
    } = newTurn;
  
    try {
      setIsLoading(true);
      const result = await emailjs.send("service_muu285h","template_wnta86i",{
        service: service,
        name: name,
        tel: tel,
        day: day,
        hora: hour,
        condition: condition,
        }, "Y-InVZhwcqF1MreUr");
  
      console.log(result.text);
      console.log(newTurn)
      result.status === 200 && setResultApi(true)

      setTimeout(()=> {
        setResultApi(false)
      }, 4000)

      setIsLoading(false);

      resetStates()

    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return {
    selectedServicesList,
    onInputChange,
    handleSelectChange,
    formValue,
    deleteItem,
    onInputSubmit,
    handleSelectDay,
    handleSelectHour,
    handleSelectCondition,
    formRef,
    handleSelectClear,
    isLoading,
    resultApi,
    deletedTurn
  };

};
