import { useState } from 'react'
import './App.css'
import Header from './UI/header'
import Body from './UI/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full p-4 h-screen bg-gray-600'>
      <Header className='h-1/12' />
      <Body className='h-11/12' />
    </div>
  )
}

export default App
