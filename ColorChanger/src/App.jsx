import { useState } from 'react'
function App() {
  const [color,setColor] = useState("black");
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2'>
      <div className='flex gap-4 justify-center bg-white p-3 rounded-lg'>
        <button className='bg-red-500 rounded-lg p-2' onClick={() => {setColor("red")}}>Red</button>
        <button className='bg-blue-500 rounded-lg p-2' onClick={() => {setColor("blue")}}>Blue</button>
        <button className='bg-green-500 rounded-lg p-2' onClick={() => {setColor("green")}}>Green</button>
        <button className='bg-yellow-500 rounded-lg p-2' onClick={() => {setColor("yellow")}}>Yellow</button>
        <button className='bg-pink-500 rounded-lg p-2' onClick={() => {setColor("pink")}}>Pink</button>
        <button className='bg-black text-white rounded-lg p-2' onClick={() => {setColor("black")}}>Black</button>
        <button className='bg-green-200 rounded-lg p-2' onClick={() => {setColor("olive")}}>Olive</button>
        <button className='bg-gray-500 rounded-lg p-2' onClick={() => {setColor("gray")}}>Gray</button>
        <button className='bg-white rounded-lg p-2' onClick={() => {setColor("white")}}>White</button>
        <button className='bg-gray-300 rounded-lg p-2' onClick={() => {setColor("lavender")}}>Lavender</button>
        <button className='bg-purple-500 rounded-lg p-2' onClick={() => {setColor("purple")}}>Purple</button>
      </div>
      </div>
    </div>
  )
}

export default App
