import { useState } from 'react'

function App() {

  return (
    <div className='bg-amber-300 h-screen'>
      Navbar

      <form className="bg-white rounded-lg px-15 py-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-5">
        <h1 className='text-center text-2xl'>Student Registration Form</h1>
        <div className='flex flex-col'>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" className=' outline-none'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="age">Age</label>
          <input type="text" id="age" name="age" placeholder="Enter your name" className=' outline-none'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" className=' outline-none'/>
        </div>
        <div className='flex flex-col'>
          <label htmlFor="cs">Course selection</label>
          <select name="cs" id="cs">
            <option value="cs0">Select</option>
            <option value="cs1">Computer Science and Engineering</option>
            <option value="cs2">Electronics and Communication Engineering</option>
            <option value="cs3">Information Technology</option>
            <option value="cs4">Electrical Engineering</option>
            <option value="cs5">Applied elctronics and instrumentation Engineering</option>
            <option value="cs6">Civil Engineering</option>
          </select>
        </div>
        <div type="submit" className='bg-blue-500 text-white px-4 py-2 rounded-lg text-center'>Submit</div>
      </form>
    </div>
  )
}

export default App
