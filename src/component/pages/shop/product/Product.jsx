import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
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
        {
            !product.image
            ?
           (
            <div className="d-flex justify-content-center my-5">
                <Spinner animation="border" />
            </div>
           )
           :
           (
            <div className="item my-5 p-3 text-center w-25 mx-auto shadow-lg">
                <img src={product.image} className='w-75' alt=""/>
                <p>{product.title}</p>
                <p>{product.price}$</p>
            </div>
           )
        }
    </div>
  )
}

export default Product