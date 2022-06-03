import React from 'react'
import '../styles/Logo.css'
import logo from '../assets/icons/LogoKLICH.svg'

const Logo = () => {
  return (
    <nav className='logo'>
      <a href='/'>
        <img src={logo} alt='logo' />
      </a>
    </nav>
  )
}

export default Logo
