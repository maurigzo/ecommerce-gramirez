import React from 'react';
import CartItem from '../CartItem/CartItem';

function CartItemsList({itemList }) {

    return <table id="shoppingCart" className="table table-condensed table-responsive">
        <thead>
            <tr>
                <th style={{ width: '60%' }}>Product</th>
                <th style={{ width: '20%' }}>Price</th>
                <th style={{ width: '20%' }}>Quantity</th>
                <th style={{ width: '16%' }}></th>
            </tr>
        </thead>
        <tbody>

            {itemList.map(i =>
                <CartItem item={i}/>
            )}

        </tbody>
    </table>
}

export default CartItemsList;