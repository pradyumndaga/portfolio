import { useState } from 'react'
import './App.css'
import Header from './UI/header'
import Body from './UI/body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full p-4 h-screen bg-radial-[at_50%_75%] from-mint-200 to-[#FAF9F6] to-90%'>
      <Header className='h-1/12' />
      <Body className='h-11/12' />
    </div>
  )
}

export default App
