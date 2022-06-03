import React from 'react'
import { useParams } from 'react-router'
import '../styles/Product.css'
import useGetProductById from '../hooks/useGetProductById'
import NotFound from './NotFound'

import Button from '../components/Button'
import { NavLink } from 'react-router-dom'
import Loader from '../components/Loader'

const ProductDetail = () => {
  // console.log(products)
  // Capture the id of the url
  const { productoId } = useParams()
  // Get the product by id
  const product = useGetProductById(productoId)

  const URL_IMAGES = `http://localhost:5000/${product.image}`

  if (!product) <Loader />

  if (product.length === 0) {
    return <NotFound />
  } else {
    return (
      <div className='p-container'>
        <div className='container-product'>
          <div className='card'>
            <div className='shoeBackground'>
              <img src={URL_IMAGES} alt='' className='shoe show' color='blue' />
            </div>
            <div className='info'>
              <div className='shoeName'>
                <div>
                  <h1 className='big'>{product.name}</h1>
                  <span className='new'>new</span>
                </div>
                <h3 className='small'>{product.brand}</h3>
              </div>
              <div className='description'>
                <h3 className='title'>Product Info</h3>
                <p className='text'>{product.description}</p>
              </div>
              <div className='color-container'>
                <h3 className='title'>numReviews</h3>
                <div className='colors'>
                  <span>{product.numReviews}</span>
                </div>
              </div>
              <div className='buy-price'>
                <Button product={product}>Agregar</Button>
                <div className='price'>
                  <h1>$ {product.price}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <NavLink to='/productos' className='button-return'>
          Retornar
        </NavLink>
      </div>
    )
  }
}

export default ProductDetail
