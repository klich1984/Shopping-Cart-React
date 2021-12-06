import React from 'react'
import '../styles/BubbleAlert.css'
import shoppingCart from '../assets/icons/icon_shopping_cart.svg'

const BubbleAlert = ({ amound }) => {
	function getNumber(amound) {
		if(!amound)
			return ''
		return amound > 9 ? '9+' : amound
	}

	return (
		<div className="Bubble-alert">
			<img className="Bubble-cart" src={shoppingCart} alt="shopping cart" />
			<span>{getNumber(amound)}</span>
		</div>
	)
}

export default BubbleAlert
