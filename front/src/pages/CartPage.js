import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import OrderItem from '../components/OrderItem'
import AppContext from '../context/AppContext'
import '../styles/CartPage.css'

const CartPage = () => {
	// get state
	const { state } = useContext(AppContext)
	const empty = state.cart.length

	const sumTotal = () => {
		const reducer = (acc, el) => acc + el.price,
			sum = state.cart.reduce(reducer, 0)
		return sum.toFixed(2)
	}

	return (
		<div>
			<aside className="MyOrder2">
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
					<div className="buttons-checkout">
						{empty > 0 ? (
							<NavLink to="/succes" className="button-checkout">
								Buy
							</NavLink>
						) : null}
						<NavLink
							disabled="true"
							to="/productos"
							className="button-checkout2"
						>
							Return
						</NavLink>
					</div>
				</div>
			</aside>
		</div>
	)
}

export default CartPage
