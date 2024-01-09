import './style.css'; 
import PaymentRow from '../component/CheckoutForm/PaymentRow'; 
import ReviewRow from '../component/CheckoutForm/ReviewRow';
import ShippingRow from '../component/CheckoutForm/ShippingRow';
import SideForm from '../component/CheckoutForm/SideForm';

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className='checkout-form-main'>
        <div className='checkout-form-title'>Checkout Form</div>
        <ShippingRow />
        <PaymentRow />
        <ReviewRow />
      </div>
      <div className='checkout-side-form-container'>
        <SideForm />
      </div>
    </div>
  )  
}

export default Checkout; 