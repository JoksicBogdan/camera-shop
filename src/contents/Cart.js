import axios from "axios";
import { htmlToJson } from "../utils/htmltojson";
import CartItem from "../component/CartItem/CartItem"; 
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartList, setCartList] = useState([]); 
  const [totalPrice, setTotalPrice] = useState(0.00); 

  useEffect(() => {
    fetchData(); 
    fetchTotalPrice(); 
  }, []); 

  const handleCheckout = () => {
    navigate('/checkout');
  }

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
      fetchTotalPrice(); 
    }).catch(err => {
      console.log(err); 
    })
  }

  return (
    <div className="cart-content">
      <div className="cart-title">Shopping Cart</div>

      <div className="cartlist-containter">
        {cartList.map(cartItem => (
          <CartItem 
            key={cartItem.id} 
            item={cartItem}
            onUpdate={fetchTotalPrice}
            onDelete={() => handleDelete(cartItem.id)}
          />
        ))}
      </div>

      <div className="cart-total">
        Total: ${totalPrice}
      </div>
      <div className="cart-checkout-container">
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart; 