import React, { useContext } from 'react'
import '../styles/Button.css'
import AppContext from '../context/AppContext'

const Button = ({ children, product }) => {
	// get function for add to cart items
	const { addToCart } = useContext(AppContext)
	const { countInStock } = product

	const handleClick = (productItem) => {
		addToCart(productItem)
	}
	return (
		<div>
			<button
				disabled={countInStock > 0 ? false : true}
				className={countInStock > 0 ? 'Button' : 'Button-disabled'}
				onClick={() => handleClick(product)}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
