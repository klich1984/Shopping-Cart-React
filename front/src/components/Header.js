import React from 'react'
import Logo from './Logo'
import '../styles/Navbar.css'
import ShoppingCart from './Checkout'

const Header = () => {
	return (
		<nav className="navbar">
			<Logo />
			<ShoppingCart />
		</nav>
	)
}

export default Header
