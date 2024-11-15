import React, { useState } from 'react'
import Logo from '../assets/Logo.png'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [mobileMenuOpen, setmMobileMenuOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 lg:px-0'>
      <div className=' max-w-7xl mx-auto flex h-14 items-center'>
        <div className='md:mr-4 flex justify-between w-full'>
            <nav className='md:flex hidden items-center space-x-6 text-lg font-medium'>
                <a href="#about" className='transition-colors duration-300 hover:text-red-300'>About</a>
                <a href="#projects" className='transition-colors duration-300 hover:text-red-300'>Projects</a>
                <a href="#contact" className='transition-colors duration-300 hover:text-red-300'>Contact</a>
            </nav>
        </div>
        <button className='inline-flex items-center justify-center rounded-md md:hidden' onClick={()=>setmMobileMenuOpen(!mobileMenuOpen)}>
           <span className='sr-only'>Open main menu</span>
           {mobileMenuOpen ? (
            <X className='h-6 w-6' aria-hidden="true"/>
           ):(
            <Menu className='h-6 w-6' aria-hidden="true"/>
           )}
        </button>
      </div>
    </header>
  )
}

export default Navbar
