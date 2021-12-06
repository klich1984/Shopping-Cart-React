/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Button from './Button'
import { NavLink } from 'react-router-dom'
import '../styles/ProductItem.css'

const ProductItem = ({ product }) => {
	const URL_IMAGES = `http://localhost:5000/${product.image}`
	const URL_PRODUCT = `/product/${product._id}`

	return (
		<div>
			<div className="product-container">
				<div className="product">
					<NavLink to={URL_PRODUCT}>
						<img src={URL_IMAGES} alt={product.name} />
					</NavLink>
					<h4>{product.name}</h4>
					<p>{product.description}</p>
					<span>$ {product.price}</span>
					{/* <span className="product-rating">★★★★☆</span> */}
					<Button product={product}>Add item to cart</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductItem
