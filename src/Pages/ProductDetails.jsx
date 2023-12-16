import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {

  const { productId } = useParams();

  return (
    <div style={{color: "white"}}>
      <h4>Product Details</h4>
        <p>Product Id - {productId}</p>
      </div>
  )
}
