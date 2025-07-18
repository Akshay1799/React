import { useState } from 'react'
import 'tailwindcss'
import './App.css'

function App() {
  const [color, setColor] = useState('grey')
  return (
    <div className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}>
      <div className='fixed flex flex-wrap justify-center top-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-5 shadow-lg bg-white text-black px-5 py-4 rounded-2xl'>
          <button className='outline-none bg-red-400 hover:bg-red-500 rounded-full shadow-lg py-2 px-5 text-white  cursor-pointer'
            onClick={() => setColor('red')}
          >Red</button>
          <button className='outline-none bg-green-400 hover:bg-green-500  rounded-full shadow-lg py-2 px-5 text-white  cursor-pointer'
            onClick={() => setColor('green')}
          >green</button>
          <button className='outline-none bg-yellow-400 hover:bg-yellow-500  rounded-full shadow-lg py-2 px-5 text-black cursor-pointer'
            onClick={() => setColor('yellow')}
          >yellow</button>
          <button className='outline-none bg-purple-400 hover:bg-purple-500  rounded-full shadow-lg py-2 px-5 text-white  cursor-pointer'
            onClick={() => setColor('purple')}
          >purple</button>
          <button className='outline-none bg-blue-400 hover:bg-blue-500  rounded-full shadow-lg py-2 px-5 text-white cursor-pointer'
            onClick={() => setColor('blue')}
          >blue</button>
          <button className=' bg-white-400 hover:bg-gray-100 outline-none  rounded-full shadow-lg py-2 px-5 text-black cursor-pointer'
            onClick={() => setColor('white')}
          >white</button>
          <button className='outline-none  rounded-full shadow-lg py-2 px-5 text-black cursor-pointer bg-pink-400 hover:bg-pink-500'
            onClick={() => setColor('pink')}
          >pink</button>
        </div>
      </div>
    </div>
  )
}

export default App
