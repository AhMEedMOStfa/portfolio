import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {Spinner} from 'react-bootstrap';
import "./Products.css"
import { useSelector,useDispatch } from "react-redux";
import { getProductsItems } from "../../../Redux/productsSlice/productSlice";

const Products = () => {

  const dispatch=useDispatch()
  useEffect(() => {
    dispatch(getProductsItems());
  }, []);
  
  const {products,loading} = useSelector((state)=>state.productsSlice);   
  return (
    <div className="container my-4">
      {
        !loading
        ?
        (
          <div className="row g-3">
        {products.map((product, i) => {
          let prodTiltle = product.title.slice(0,30);
          return (
            <div className="col-md-3"key={i}>
                <Link className="text-decoration-none text-black" to = {`/products/product/${product.id}`} >
                 <div className="shadow-lg item text-center bg-white py-3" >
                   <img src={product.image} className='img'  alt="" />
                   <p>{prodTiltle}</p>
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
          <div className="d-flex justify-content-center">
          
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

// fetchData();
// const fetchData = () => {
//   fetch("https://fakestoreapi.com/products")
//     .then((res) => res.json())
//     .then((json) => setProduct(json));
// };