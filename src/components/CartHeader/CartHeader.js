import React from 'react';

function CartHeader({quantity}) {
    return <>
        <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
        <p className="mb-5 text-center">
            <i className="text-info font-weight-bold">{quantity}</i> items in your cart</p>
    </>
}

export default CartHeader;