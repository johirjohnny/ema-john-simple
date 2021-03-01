import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
        const product = cart[index];
        total = total + product.price;
        
    }

    let shipping = 0;
    if(total>1000){
        shipping = 0;
    }else if(total>500){
        shipping = 4.99
    }
    else if(total>0){
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal =(total+shipping+Number(tax)).toFixed(2)      
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Orderd : {cart.length} </p>
            <p>Product price : {total}</p>
            <p><small>Shipping cost : {shipping}</small></p>
            <p><small>Tax+Vat : {tax}</small></p>
            <p>Total price : {grandTotal}</p>
        </div>
    );
};

export default Cart;