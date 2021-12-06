import { useEffect, useState } from 'react'
import axios from 'axios'

const useGetProductById = (id) => {
	const [product, setProduct] = useState([])
	const URL_PRODUCT = `http://localhost:5000/api/products/${id}`
	// eslint-disable-next-line react-hooks/exhaustive-deps
	useEffect(async () => {
		const response = await axios(URL_PRODUCT)
		// console.log(response.data)
		setProduct(response.data)
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	// Return of products
	return product
}

export default useGetProductById
