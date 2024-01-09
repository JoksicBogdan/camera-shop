import './ProductBar.css';
import axios from "axios";
import ProductItem from "../ProductItem/ProductItem";
import { htmlToJson } from "../../utils/htmltojson"; 
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const ProductBar = (props) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/another-page");
  }

  const [products, setProducts] = useState([]) 

  useEffect(() => {
    axios.get(`http://localhost:8000/${props.section}/`).then(res => {
      const html = res.data; 
      let json = htmlToJson(html); 
    
      let array = JSON.parse(json); 
      var list = array.map(function(item) {
        return {
          id: item.id, 
          title: item.model_name, 
          price: item.retail_price, 
          image: item.image
        }
      }); 
      
      setProducts(list); 
    }).catch(err => {
      console.log(err); 
    }); 
  }, []); 

  return (
    <div className="home-product-bar">
      <div className="home-product-bar-head">
        <div className="home-product-bar-title">{props.title}</div>
        <div className="home-product-bar-more" onClick={handleClick}>Explore all details</div>
      </div>

      <div className="home-product-bar-container">
        { products.map(product => (
          <ProductItem id={product.id} title={product.title} price={product.price} image={product.image} section={props.section}/>
        ))}
      </div>
    </div>
    )
}

export default ProductBar