import { useContext } from 'react'
import { Carousel } from '../src/Components/Carousel'
import { Comments } from '../src/Components/Comments'
import { PricesTurns } from '../src/Components/PricesTurns'

import './StylePages/Home.css'
import { TurnsContext } from '../src/Context/TurnsContext'
export const Home = () => {

  const {turns} = useContext(TurnsContext)

  return (
    <main className="Home">
      <div className="home-mobile">
        <Carousel/>
        <PricesTurns/>
        <Comments/>
      </div>
    </main>
  )
}