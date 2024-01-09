import axios from 'axios';
import './CartItem.css'; 
import React, { useState } from "react";

const CartItem = ({item, onDelete, onUpdate}) => {
  const [isNotSelected, setIsNotSelected] = useState(true);
  const [number, setNumber] = useState(item.number); 
  const options = ["1","2","3","4","5","6","7","8","9","10+"]; 

  const handleDelete = () => {
    onDelete(); 
  }

  const handleQtyUpdate = (newNum) => {
    axios.patch(`http://localhost:8000/cart/update/user=1&id=${item.id}&qty=${newNum}`).then(res => {
      console.log("update success"); 
      onUpdate(); 
    }).catch(err => {
      console.log(err); 
    })
  }

  const handleQtyChange = (option) => {
    const val = option.target.value;

    if (val === "10+") {
      setIsNotSelected(false); 
      return; 
    }

    setNumber(val);  
    handleQtyUpdate(val); 
  }

  const handleQtyClick = (val) => {
    handleQtyUpdate(val);
  }

  const handleQtyInput = (event) => {
    setNumber(event.target.value); 
  }

  return (
    <div className="cart-item-container">
      <div className="cart-item-image-container">
        <img className="cart-item-img" src={item.image} alt="image" />
      </div>

      <div className="cart-item-info-container">
        <div className='cart-item-title'>{item.title}</div>
        <div className='cart-unit-price'>${item.price}</div>
        <div className='cart-item-qty'>
          {(isNotSelected && item.number < 10) ? (
            <div className='cart-item-qty1'>
              <select
                value={options[number-1]}
                onChange={handleQtyChange}
                className='cart-item-qty-selector'
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select> 
            </div>
          ) : (
            <div className='cart-item-qty2'>
              <input 
                type="text" 
                className='cart-item-qty-input' 
                value={number}
                onChange={handleQtyInput}
              />
              <button className='cart-item-qty-update' onClick={() => handleQtyClick(number)}>Update</button>
            </div>
          )} 
          <div className='cart-item-delete' onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem; 