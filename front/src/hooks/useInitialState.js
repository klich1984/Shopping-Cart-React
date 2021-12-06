/* custom hook to share the state  */
import { useState } from 'react'

/*  */
const initialState = {
	cart: [],
}

/* State for car */
const useInitialState = () => {
	const [state, setState] = useState(initialState)

	const addToCart = (payload) => {
		const { cart } = state
		if (cart.find((x) => x._id === payload._id)) {
			const newCart = cart.map((el) =>
				el._id === payload._id
					? {
							...el,
							amound: el.amound + 1,
							price: el.price + payload.price,
					}
					: el
			)
			return setState({ cart: newCart })
			// console.log('Newcart',newCart)
		}

		return setState({
			cart: state.cart.concat({
				...payload,
				amound: 1,
			}),
		})
	}

	const removeFromCart = (payload) => {
		// console.log(payload._id)
		setState({
			...state,
			cart: state.cart.filter((items) => items._id !== payload._id),
		})
	}

	/* Return information (The State and function addToCart) */
	return {
		state,
		addToCart,
		removeFromCart,
	}
}

export default useInitialState
