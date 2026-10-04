import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Container from './../components/Container';

const SingleProduct = () => {
  let productId = useParams()
  let [product, setProduct] = useState([])
  useEffect(()=>{
    axios.get(`https://dummyjson.com/products/${productId.id}`)
    .then((res)=> setProduct(res.data))
  },[productId.id])
  return (
    <div>
      <Container>
        <div className="">
          <img src={product.thumbnail} alt={product.id} />
        </div>
        <div className="">
          <h3>{product.title}</h3>
        </div>
      </Container>
    </div>
  )
}

export default SingleProduct
