import React from 'react'

const Navbar = () => {
  return (
    <header className='bg-black text-white px-2 py-3 w-full'>
      <nav className='flex md:justify-between items-center gap-5 container mx-auto'>
        <div>
            <h1 className='text-2xl font-bold hidden md:inline'>Sharif</h1>
        </div>
        <div className='hidden md:inline'>
            <ul className='flex space-x-8'>
                <li><a className='hover:text-gray-400 text-lg' href="#home">Home</a></li>
                <li><a className='hover:text-gray-400 text-lg' href="#about">About Me</a></li>
                <li><a className='hover:text-gray-400 text-lg' href="#sevices">Services</a></li>
                <li><a className='hover:text-gray-400 text-lg' href="projects">Projects</a></li>
                <li><a className='hover:text-gray-400 text-lg' href="contact">Contacts</a></li>
            </ul>

        </div>
        <button className='bg-gradient-to-r from-green-400 to-blue-400 text-white font-medium text-lg py-2 px-4 border-none rounded-full cursor-pointer transform transition-transform duration-300 hover:scale-105 hidden md:inline'>Connect Me</button>
      </nav>
    </header>
  )
}

export default Navbar
