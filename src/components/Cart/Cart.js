import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, course)=> total + course.price, 0);
    const styleSummary={ boxShadow:'7px 7px 10px yellow', margin: '15px', padding: '10px',borderRadius:'20px'}

    return (
        <div style={styleSummary}>
            <h1><b>Enroll Summary</b></h1>
            <h2>Total Enrolled : <b> {cart.length}</b></h2>
            <h2>Total Price : <b> {totalPrice}</b></h2>
        </div>
    );
};

export default Cart;