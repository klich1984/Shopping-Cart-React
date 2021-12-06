import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout'
import ProductList from './containers/ProductList'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AppContext from './context/AppContext'
import useInitialState from './hooks/useInitialState'
import ProductDetail from './pages/ProducDetail'
import CartPage from './pages/CartPage'
import Succes from './pages/Succes'

const App = () => {
	// -------------------------------------------------
	// DO NOT USE THE CODE BELOW FROM LINES 8 TO 18. THIS IS
	// HERE TO MAKE SURE THAT THE EXPRESS SERVER IS RUNNING
	// CORRECTLY. DELETE CODE WHEN COMPLETING YOUR TEST.
	// eslint-disable-next-line no-unused-vars
	const [response, setResponse] = useState('')

	// call server to see if its running
	useEffect(() => {
		const getApiResponse = () => {
			fetch('http://localhost:5000/')
				.then((res) => res.text())
				.then((res) => setResponse(res))
		}
		getApiResponse()
	}, [])
	// -------------------------------------------------

	/* bring all the states we want to share */
	const initialState = useInitialState()

	return (
		<AppContext.Provider value={initialState}>
			<BrowserRouter>
				<Layout>
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/productos" element={<ProductList />} />
						<Route exact path="/product/:productoId" element={<ProductDetail />} />
						<Route exact path="/checkout" element={<CartPage />} />
						<Route exact path="/succes" element={<Succes />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Layout>
			</BrowserRouter>
		</AppContext.Provider>
			// <div style={{ textAlign: 'center' }}>
			// 	{/* <h1> Prueba tecnica front Ecomsur 2021</h1> */}
			// 	<Home />
			// 	{/* Check to see if express server is running correctly */}
			// 	{/* <h5>{response}</h5> */}
			// </div>
	)
}

export default App
