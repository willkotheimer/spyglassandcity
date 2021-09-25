import React from 'react';

export default function Cart({ cartItems }) {
  return (
    <>
      <div class='container'>
        <div class='row'>
          <div class='col-sm'>Name</div>
          <div class='col-sm'>Subtotal</div>
          <div class='col-sm'>Total Price</div>
        </div>
      </div>
      {cartItems.map((item) => (
        <>
          <div class='row'>
            <div class='col-sm'>{item.cartItems}</div>
            <div class='col-sm'>{item.cartTotal}</div>
            <div class='col-sm'>{item.subTotal}</div>
          </div>
        </>
      ))}
    </>
  );
}
