import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import '../styles/MyOrders.css'

const MyOrder = () => {
	const { state } = useContext(AppContext)
	const empty = state.cart.length // no items added to cart

	// Total sum of products added to cart
	const sumTotal = () => {
		const reducer = (acc, el) => acc + el.price,
			sum = state.cart.reduce(reducer, 0)
		return sum.toFixed(2)
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				{empty > 0 ? (
					<p className="title">My order</p>
				) : (
					<p className="title">Your cart is empty.</p>
				)}
			</div>
			<div className="my-order-content">
				{state.cart.map((product) => (
					<OrderItem product={product} key={`orderItem-${product._id}`} />
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>$ {sumTotal()}</p>
				</div>
				{empty > 0 ? (
					<NavLink to="/checkout" className="button-checkout">
						Checkout
					</NavLink>
				) : null}
			</div>
		</aside>
	)
}

export default MyOrder
