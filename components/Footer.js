import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-stone-800 text-white flex items-center justify-center px-4 h-16'>
        <p className='text-center'>Copyright &copy; {currentYear} ThankBank<span className='text-xs mx-1'>bhomaleprajwal</span> - All rights reserved!</p>
    </footer>
  )
}

export default Footer