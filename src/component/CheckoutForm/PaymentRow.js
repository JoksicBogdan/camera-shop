import './CheckoutForm.css'; 
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { htmlToJson } from "../../utils/htmltojson";

const PayementRow = () => {
  const [card, setCard] = useState(null); 
  const [isFetched, setIsFetched] = useState(false); 

  useEffect(() => {
    fetchCards(1); 
  }, [])

  const fetchCards = (num) => {
    axios.get('http://localhost:8000/card/user=1').then(res => {
      const html = res.data; 
      let json = htmlToJson(html); 
      let array = JSON.parse(json); 
      setCard(array[num]);
      setIsFetched(true);  
    }).catch(err => {
      console.log(err); 
    })
  }

  const handleChengePayment = () => {
    // imple change address 
    alert("under development"); 
  }

  return (
    <div className="row-container">
      <div className="row-title">Payment Methods</div>
      {(isFetched) ? (
        <div className='row-info'>
          <div>Ending in {card.card_number.slice(-4)}</div>
          <div>Billing address: Same as shipping address</div>
          <div className='checkout-change' onClick={handleChengePayment}>
            Change payment method 
          </div>
        </div>
      ) : (
        <div className='row-info'>Loading...</div>
      )}
    </div>
  )
}

export default PayementRow; 