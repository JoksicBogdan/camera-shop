import './style.css'; 
import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { htmlToJson } from "../utils/htmltojson";

const ProductDetail = () => {
  const { productType, id } = useParams();
  const [product, setProduct] = useState([]); 
  const [number, setNumber] = useState(1); 
  
  useEffect(() => {
    axios.get(`http://localhost:8000/${productType}/id=${id}`).then(res => {
      const html = res.data; 
      let json = htmlToJson(html); 
     
      let array = JSON.parse(json); 
      var list = array.map(function(item) {
        return {
          id: item.id, 
          title: item.model_name, 
          price: item.retail_price, 
          image: item.image,
          description: item.description
        }
      }); 

      setProduct(list[0]); 
    }).catch(err => {
      console.log(err); 
    });
  }, []); 

  const handleQtyInput = (event) => {
    setNumber(event.target.value); 
  }

  const handleAddToCart = async (u_id, p_id, p_num) => {
    try {
      const res = await axios.post('http://localhost:8000/cart/post', {
        user_id: u_id, 
        prod_id: p_id, 
        qty: p_num
      }); 
      console.log(res.data); 
    } catch(err) {
      console.error(err); 
    }
  }

  return (
    <div className='product-detail-container'>
      <div className='product-detail-image-container'>
        <img className='product-detail-image' src={product.image} alt={productType} />  
      </div>
      <div className='product-detail-info'>
        <div className='product-detail-title'>{product.title}</div>
        <div className='product-detail-price'>${product.price}</div>
        <div className='product-detail-description'>
          <p className='description-title'>Description</p>
          {product.description}
        </div>
        <input 
          type="text"
          className='add-to-cart-qty'
          value={number}
          onChange={handleQtyInput}
        />
        <button className='add-to-cart-btn' onClick={() => handleAddToCart(1, id, number)}>Add to Cart</button>    
      </div>
    </div>
  )
}

export default ProductDetail; 