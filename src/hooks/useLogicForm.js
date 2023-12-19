import { useState } from "react";
export const useLogicForm = () => {

  const [infoTurn, setInfoTurn] = useState({
    name:'',
    services:''
  });

  const [formValue, setFormValue] = useState({
    name:'',
    email:'',
    tel:''
  })
  
  const [selectedServicesList, setSelectedServicesList] = useState([]);

  const handleSelectChange = (e) => {
    console.log(e.target.value)
    setSelectedServicesList([
      ...selectedServicesList,
      e.target.value
    ])
    e.target.selectedIndex = 0;
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
    e.preventDefault()
    console.log(formValue)
    console.log(selectedServicesList)
    setInfoTurn({
      ...infoTurn,
      name:formValue.name,
      services:selectedServicesList
    })
  }

  return {
    selectedServicesList,
    onInputChange,
    handleSelectChange,
    formValue,
    deleteItem,
    onInputSubmit,
    infoTurn
  }
}