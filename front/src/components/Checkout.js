import React, { useState, useContext } from 'react'
import BubbleAlert from './BubbleAlert'
import '../styles/ShoppingCart.css'
import AppContext from '../context/AppContext'
import MyOrder from '../containers/MyOrder'
import bag from '../assets/icons/icon-bag.png'

const Checkout = () => {
	const [toggle, setToggle] = useState(false)
	/* Get state */
	const { state } = useContext(AppContext)
	/* get amound */
	const amound = state.cart.reduce((acc, el) => acc + el.amound, 0)
	// Open and close checkout modal
	const handleToggle = () => {
		setToggle(!toggle)
	}

	return (
		<div>
			<div className="Checkout">
				<span className="Checkout-bubble">
					{state.cart.length > 0 ? <BubbleAlert amound={amound}/> : null}
				</span>
				<button
					className="Checkout-shopping"
					onClick={handleToggle}
					><img src={bag} alt="shopping cart" /></button>
			</div>
				{toggle && <MyOrder />}
		</div>
	)
}

export default Checkout
