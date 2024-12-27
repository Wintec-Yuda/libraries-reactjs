import React from 'react'
import { Axios, StyledButton, MuiCard, Counter, MotionCard } from '../components'

const FEATURES = [
  {id: 1, component: <Axios />},
  {id: 2, component: <StyledButton />},
  {id: 3, component: <MuiCard />},
  {id: 4, component: <Counter />},
  {id: 5, component: <MotionCard />}
]

const Home = () => {
  return (
    <div className='grid grid-cols-4 p-4 gap-2'>
      {FEATURES.map((feature) => (
        <div key={feature.id} className='bg-gray-100 p-4 border border-blue-500'>
          {feature.component}
        </div>
      ))}
    </div>
  )
}

export default Home