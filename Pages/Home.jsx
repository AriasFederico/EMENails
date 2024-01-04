import { useContext } from 'react'
import { Carousel } from '../src/Components/Carousel'
import { Comments } from '../src/Components/Comments'
import { PricesTurns } from '../src/Components/PricesTurns'

import './StylePages/Home.css'
export const Home = () => {

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