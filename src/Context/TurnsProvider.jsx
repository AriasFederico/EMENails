import { useState, useEffect } from "react"
import { TurnsContext } from "./TurnsContext.jsx"

export const TurnsProvider = ({children}) => {
  
  const getTurns = localStorage.getItem('turns')
  const turnData = getTurns ? JSON.parse(getTurns) : [];

  const validData = Array.isArray(turnData) ? turnData : [];
  const [turns, setTurns] = useState(validData);

  useEffect(()=>{
    localStorage.setItem("turns", JSON.stringify(turns))
  },[turns])

  return(
    <TurnsContext.Provider value={{turns,setTurns}}>
      {children}
    </TurnsContext.Provider>
  )
}