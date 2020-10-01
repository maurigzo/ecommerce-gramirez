import React from 'react';

function CartItem({item}){
    return <tr key={item.id}>
    <td data-th="Product">
        <div className="row">
            <div className="col-md-3 text-left">
                <img src={item.image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " style={{height:129, width: 129}} />
            </div>
            <div className="col-md-9 text-left mt-sm-2">
                <h4>{item.title}</h4>
            </div>
        </div>
    </td>
    <td data-th="Price">{`$${item.price}`}</td>
    <td data-th="Quantity">
        <p>{item.amount}</p>
    </td>
</tr>
}

export default CartItem;