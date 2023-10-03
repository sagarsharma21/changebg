import { useState } from 'react'
import './App.css'
import React from 'react';


function App() {
  
  const [color, setColor] = useState('olive');

  function changebg(color) {
     setColor(color);
  }
  

  return (
    <>
     
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl '>
            <h1 className='bg-green-500 text-3xl rounded-3xl px-3 px-2 text-grey'>Background Changer App</h1>
           
            <button className="px-3 py-2 text-white bg-red-500 rounded-3xl" onClick={() => setColor('violet')}>Violet</button>
            <button className="px-3 py-2 text-white bg-violet-500 rounded-3xl" onClick={() => setColor('indigo')}>Indigo</button>
            <button className='px-3 py-2 text-white bg-indigo-500 rounded-3xl' onClick={()=> changebg('blue')}>Blue</button>
            <button className='px-3 py-2 text-white bg-blue-500 rounded-3xl' onClick={()=> changebg('green')}>Green</button>
            <button className="px-3 py-2 text-white bg-green-500 rounded-3xl" onClick={() => changebg('yellow')} >Yellow</button>
            <button className="px-3 py-2 text-white bg-yellow-500 rounded-3xl" onClick={() => changebg('orange')}>Orange</button>
            <button className='px-3 py-2 text-white bg-orange-500 rounded-3xl' onClick={() => changebg('red')}>Red</button>
          </div>
          
        </div > 
        {/* <footer className='bottom-5 flex-end'>Disclaimer: Colours are different than they appear.</footer> */}
        <p className='text-white' style={{ textAlign:'center', fontSize:18}}>Click on any desired buttons to change background colour.</p>
      </div>
           
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <footer>Note: Colours are different than they appear.</footer>

    </>
  )
}

export default App;

       
