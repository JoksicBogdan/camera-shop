import axios from 'axios';
import './ReviewItem.css'; 
import React, { useState } from "react";

const ReviewItem = ({item, onDelete, onUpdate}) => {
  const [isNotSelected, setIsNotSelected] = useState(true);
  const [number, setNumber] = useState(item.number); 
  const options = ["1","2","3","4","5","6","7","8","9","10+"]; 

  const handleDelete = () => {
    onDelete(); 
    onUpdate(); 
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
    <div className="review-item-container">
      <div className="review-item-image-container">
        <img className="review-item-img" src={item.image} alt="image" />
      </div>

      <div className="review-item-info-container">
        <div className='review-item-title'>{item.title}</div>
        <div className='review-unit-price'>${item.price}</div>
        <div className='review-item-qty'>
          {(isNotSelected && item.number < 10) ? (
            <div className='review-item-qty1'>
              <select
                value={options[number-1]}
                onChange={handleQtyChange}
                className='review-item-qty-selector'
              >
                {options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select> 
            </div>
          ) : (
            <div className='review-item-qty2'>
              <input 
                type="text" 
                className='review-item-qty-input' 
                value={number}
                onChange={handleQtyInput}
              />
              <button className='review-item-qty-update' onClick={() => handleQtyClick(number)}>Update</button>
            </div>
          )} 
          <div className='review-item-delete' onClick={handleDelete}>Delete</div>
        </div>
      </div>
    </div>
  )
}

export default ReviewItem; 