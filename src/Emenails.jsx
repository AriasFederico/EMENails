import { Home } from "../Pages/Home.jsx"
import { About } from "../Pages/About.jsx"
import { Footer } from "../Pages/Footer.jsx"
import { Prices } from "../Pages/Prices.jsx"
import { Turns } from "../Pages/Turns.jsx"

import { NavBar } from "./Components/NavBar.jsx"
import { Route,Routes } from "react-router-dom"
import { TurnsProvider } from "./Context/TurnsProvider.jsx"
export const Emenails = () => {
  return (
    <TurnsProvider>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/pricing" element={<Prices></Prices>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/turns" element={<Turns></Turns>}></Route>
      </Routes>
      <Footer/>
    </TurnsProvider>
  )
}