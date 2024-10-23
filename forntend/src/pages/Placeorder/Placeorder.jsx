import React, { useContext } from 'react';
import './Placeorder.css';
import { StoreContext } from '../../context/StoreContext';


const Placeorder = () => {

  const {getTotalCartAmount} = useContext(StoreContext);
  return (
    <form className='place-order'>
      <div className="place-order-left">

      <p className="title">
        Delivery Information
      </p>
      <div className="multi-fields">
        <input type="text" placeholder='first name'/>
        <input type="text" placeholder='last name'/>
      </div>
      <input type="email" placeholder='Email address'/>
      <input type="text" placeholder='Street'/>
     
      <div className="multi-fields">
        <input type="text" placeholder='City '/>
        <input type="text" placeholder='State'/>
      </div>
      <div className="multi-fields">
        <input type="number" placeholder='Zip Code'/>
        <input type="text" placeholder='Country'/>
      </div>
      <input type="number" placeholder='phone'/>
      </div>

      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-detail">
              <p>Sub Total</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>{getTotalCartAmount() === 0 ? 0:2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>{getTotalCartAmount() + getTotalCartAmount() === 0 ? 0:2}</b>
            </div>
          </div>
          <button >Proceed To Payment</button>
        </div>
      </div>
    </form>
  )
}

export default Placeorder
