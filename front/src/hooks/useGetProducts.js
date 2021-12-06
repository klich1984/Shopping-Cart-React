import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProducts = (URL_PRODUCTS) => {
	const [products, setProducts] = useState([])

	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		const response = await axios(URL_PRODUCTS)
		// console.log(response.data)
		setProducts(response.data)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Return of products
	return products
}

export default useGetProducts
