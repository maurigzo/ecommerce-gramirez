import React, { useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import loadingSpin from '../../assets/loadingSpin.svg';
import LoadingSpin from '../../components/LoadingSpin/LoadingSpin';

function PostSale (){
    const { orderId, loading } = useCartContext();

    useEffect(()=>{
        console.log("mounted");
    },[]);
    return <div>
    {loading ?
        <LoadingSpin image={loadingSpin} /> :<div>
        <h2>Successful purchase!</h2>
        <h2>{`Here is your order ID: ${orderId}`}</h2></div>}
        </div>
}

export default PostSale;