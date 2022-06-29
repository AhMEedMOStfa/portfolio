import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Spinner} from 'react-bootstrap';

const Products = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProduct(json));
  };

  const [products, setProduct] = useState([]);
  console.log(products);
  return (
    <div className="container">
      {
        products.length
        ?
        (
          <div className="row">
        {products.map((product, i) => {
          return (
                <div className="col-md-3">
                <Link className="text-decoration-none text-black" to = {`/products/product/${product.id}`} key={i}>
                 <div className="shadow item">
                   <img src={product.image} className="w-100" alt="" />
                   <p>{product.title}</p>
                   <p>{product.price} $</p>
                 </div>
               </Link>
             </div>
          );
        })}
      </div>
        )
        :
        (
          <div>
          
              <Spinner animation="border" size="sm" />
              <Spinner animation="border" />
              <Spinner animation="grow" size="sm" />
              <Spinner animation="grow" />

          </div>
        )
      }
      
    </div>
  );
};

export default Products;
