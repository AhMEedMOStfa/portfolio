import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {

    const urlParams = useParams();

    useEffect(()=>{
        fetchProduct();
    },[])

    const fetchProduct = ()=>{
        fetch(`https://fakestoreapi.com/products/${urlParams.id}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))
    }

    const [product,setProduct] = useState({})
  return (
    <div className='container'>
        <div className="item my-5 p-3 w-25 mx-auto shadow">
            <img src={product.image} className='w-100' alt="" />
            <p>{product.title}</p>
            <p>{product.price}$</p>
        </div>
    </div>
  )
}

export default Product