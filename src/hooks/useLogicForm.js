import { useContext, useState } from "react";
import { TurnsContext } from "../Context/TurnsContext.jsx";
export const useLogicForm = () => {

  const { turns, setTurns } = useContext( TurnsContext )

  const [formValue, setFormValue] = useState({
    name:'',
    email:''
  })
  
  const [selectedServicesList, setSelectedServicesList] = useState([]);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('Ninguno');

  const handleSelectChange = (e) => {
    setSelectedServicesList([
      ...selectedServicesList,
      e.target.value
    ])
    e.target.selectedIndex = 0;
  }

  const handleSelectDay = (e) => {
    setSelectedDay(e.target.value)
    
  }

  const handleSelectHour = (e) => {
    setSelectedHour(e.target.value)
  }

  const handleSelectCondition = (e) => {
    const newValue = e.target.value;
    setSelectedCondition(() => {
      return newValue;
    });
  }

  const onInputChange = (event) => {
    const {name, value} = event.target;
    setFormValue({
      ...formValue,
        [name]:value
    })
  }

  const deleteItem = () => {
    console.log('asd')
  }

  const onInputSubmit = (e) => {
    e.preventDefault();  
  
    setTurns(() => {
      const updatedTurns = {
        name: formValue.name,
        condition: selectedCondition,
        services: selectedServicesList.join(' - '),
        day: selectedDay,
        hour: selectedHour,
        tel: formValue.tel,
      };
      console.log(updatedTurns); 
      return updatedTurns;
    });
  }

  return {
    selectedServicesList,
    onInputChange,
    handleSelectChange,
    formValue,
    deleteItem,
    onInputSubmit,
    handleSelectDay,
    handleSelectHour,
    handleSelectCondition
  }
}

