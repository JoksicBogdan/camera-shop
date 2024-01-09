import './CheckoutForm.css'; 
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { htmlToJson } from "../../utils/htmltojson";

const ShippingRow = () => {
  const [address, setAddress] = useState(null); 
  const [isFetched, setIsFetched] = useState(false); 

  useEffect(() => {
    fetchAddress(); 
  }, [])

  const fetchAddress = () => {
    axios.get('http://localhost:8000/address/user=1').then(res => {
      const html = res.data; 
      let json = htmlToJson(html); 
      let array = JSON.parse(json); 
      setAddress(array[0]);
      setIsFetched(true);  
    }).catch(err => {
      console.log(err); 
    })
  }

  const handleChengeAddress = () => {
    // imple change address 
    alert("under development"); 
  }

  return (
    <div className="row-container">
      <div className="row-title">Shipping address</div>
      {(isFetched) ? (
        <div className='row-info'>
          <div>{address.first_name} {address.last_name}</div>
          <div>{address.address1}</div>
          <div>{address.city}, {address.province} {address.zip_code}</div>
          <div className='checkout-change' onClick={handleChengeAddress}>
            Change address 
          </div>
        </div>
      ) : (
          <div className='row-info'>Loading...</div>
      )}
    </div>
  )
}

export default ShippingRow; 