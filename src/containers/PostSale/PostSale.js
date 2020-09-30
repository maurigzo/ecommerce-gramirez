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
        <LoadingSpin image={loadingSpin} /> :
        <h2>{`Here is your order ID: ${orderId}`}</h2>}
        </div>
}

export default PostSale;