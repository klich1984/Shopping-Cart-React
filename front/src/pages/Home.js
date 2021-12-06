import React from 'react'
import Loader from '../components/Loader'
import '../styles/Home.css'

const Home = () => {
	return (
		<div className="home-container">
			<h1> Prueba tecnica front Ecomsur 2021</h1>
			<h3>Bienvenidos a esta tienda realizada con React</h3>
			<a href="/productos">Ver Productos</a>
			<Loader />
		</div>
	)
}

export default Home
