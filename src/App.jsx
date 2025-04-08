import { useState } from 'react'
import './App.css'
import Header from './UI/header'
import Body from './UI/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full p-4 h-screen overflow-y-auto bg-gray-600'>
      <Header />
      <Body className='flex-auto' />
      <p className='flex justify-center text-white'>© 2025 Pradyumn Daga. All rights reserved.</p>
    </div>
  )
}

export default App
