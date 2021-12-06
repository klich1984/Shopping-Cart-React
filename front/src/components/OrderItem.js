import React, { useContext } from 'react'
import '../styles/OrderItem.css'
import close from '../assets/icons/delete.svg'
import AppContext from '../context/AppContext'

const OrderItem = ({ product }) => {
	const URL_IMAGES = `http://localhost:5000/${product.image}`,
		{ removeFromCart } = useContext(AppContext) // Function for remove items

	const handleRemove = (product) => {
		removeFromCart(product)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={URL_IMAGES} alt={product.name} />
			</figure>
			<p>{product.name}</p>
			<p>$ {product.price.toFixed(2)}</p>
			<img src={close} alt="close" onClick={() => handleRemove(product)} />
			<pspan>{product.amound}</pspan>
		</div>
	)
}

export default OrderItem
