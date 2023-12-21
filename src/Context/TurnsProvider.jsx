import { useState, useEffect } from "react"
import { TurnsContext } from "./TurnsContext.jsx"

export const TurnsProvider = ({children}) => {
  //recibe los props los childrens

  const initialTurns = JSON.parse(localStorage.getItem("turns")) || {
    name: '',
    condition: '',
    services: '',
    tel:'',
    day:'',
    hour:''
  };

  const [turns, setTurns] = useState(initialTurns);

  useEffect(() => {
    localStorage.setItem("turns", JSON.stringify(turns));
  }, [turns]);

  return(
    <TurnsContext.Provider value={{turns,setTurns}}>
      {children}
    </TurnsContext.Provider>
  )
}