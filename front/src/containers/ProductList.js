import React from 'react'
import Loader from '../components/Loader'
import ProductItem from '../components/ProductItem'
import useGetProducts from '../hooks/useGetProducts'
import '../styles/ProductList.css'

const URL_PRODUCTS = 'http://localhost:5000/api/products'

const ProductList = () => {
	const products = useGetProducts(URL_PRODUCTS)
	return (
		<section className="main-container">
			<div className="ProductList">
				{products ? (
					products.map((product) => (
						<ProductItem product={product} key={`productList-${product._id}`} />
					))
				) : (
					<Loader />
				)}
			</div>
		</section>
	)
}

export default ProductList
