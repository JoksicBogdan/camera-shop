import './CheckoutForm.css'; 
import axios from 'axios';
import { htmlToJson } from "../../utils/htmltojson";
import ReviewItem from '../ReviewItem/ReviewItem';
import React, { useState, useEffect } from "react";

const ReviewRow = () => {
  const [cartList, setCartList] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0.00); 

  useEffect(() => {
    fetchData(); 
    fetchTotalPrice(); 
  }, []); 

  const fetchTotalPrice = () => {
    axios.get('http://localhost:8000/cart/total_price/user=1').then(res => {
      let total = res.data.total_price; 
      setTotalPrice(total.toFixed(2));
      console.log(totalPrice);  
    }).catch(err => {
      console.log(err); 
    })
  }

  const fetchData = () => {
    axios.get('http://localhost:8000/cart/user=1').then(res => { // temporarily using user 1
      const html = res.data; 
      let json = htmlToJson(html); 

      let array = JSON.parse(json); 
      var list = array.map(function(item) {
        return {
          id: item.id, 
          title: item.model_name, 
          price: item.retail_price,
          number: item.prod_num,
          image: item.image
        }
      });
      setCartList(list);
    }).catch(err => {
      console.log(err); 
    })
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/cart/delete/user=1&id=${id}`).then(res => {
      console.log("deletion successful"); 
      setCartList(cartList.filter((item) => item.id !== id));
    }).catch(err => {
      console.log(err); 
    })
  }

  return (
    <div className="row-container">
      <div className="row-title">Review Items</div>
      <div className='row-info' id='review-item-list'>
        {cartList.map(cartItem => (
          <ReviewItem 
            key={cartItem.id} 
            item={cartItem}
            onUpdate={fetchTotalPrice}
            onDelete={() => handleDelete(cartItem.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default ReviewRow; 