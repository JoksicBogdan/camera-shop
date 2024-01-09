import axios from "axios";
import React, { useState, useEffect } from "react";

const SideForm = () => {
  const [totalPrice, setTotalPrice] = useState(0.00); 
  const [shippingPrice, setShippingPrice] = useState(5.99); 
  const [beforeTax, setBeforeTax] = useState(0.00); 
  const [hst, setHst] = useState(15.00); 
  const [pst, setPst] = useState(10.00); 
  const [finalPrice, setFinalPrice] = useState(0.00); 

  useEffect(() => {
    fetchTotalPrice(); 
  }, []); 

  const fetchTotalPrice = () => {
    axios.get('http://localhost:8000/cart/total_price/user=1').then(res => {
      let total = res.data.total_price; 
      let before = total + shippingPrice; 
      let after = before + hst + pst; 
      setTotalPrice(total.toFixed(2));
      setBeforeTax(before.toFixed(2)); 
      setFinalPrice(after.toFixed(2)); 
      console.log(totalPrice);  
    }).catch(err => {
      console.log(err); 
    })
  }

  const handlePlaceOrder = () => {
    alert("under development"); 
  }

  return (
    <div className="checkout-side-form">
      <div className="checkout-side-form-title">
        Order Summary
      </div>
      <div className="checkout-side-form-main"> 
        <div className="before-tax">
          <div className="preorder-row">
            <div className="preorder-label">Items:</div>
            <div className="preorder-price">${totalPrice}</div>
          </div>
          <div className="preorder-row">
            <div className="preorder-label">Shipping&handling:</div>
            <div className="preorder-price">${shippingPrice}</div>
          </div>
          <div className="preorder-row">
            <div className="preorder-label">Total before tax:</div>
            <div className="preorder-price">${beforeTax}</div>
          </div>
          <div className="preorder-row" id="after-tax">
            <div className="preorder-label">Estimated GST/HST:</div>
            <div className="preorder-price">${hst}</div>
          </div>
          <div className="preorder-row">
            <div className="preorder-label">Estimated PST/RST/QST:</div>
            <div className="preorder-price"> ${pst}</div>
          </div>
        </div>
      </div>
      <div className="preorder-row" id="checkout-total-price">
        <div className="preorder-label">Order Total:</div>
        <div className="preorder-price"> ${finalPrice}</div>
        <button id="checkout-button" onClick={handlePlaceOrder}>Place Order</button>
      </div>
    </div>
  )
}

export default SideForm; 