import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserInfo from '../UserInfo/UserInfo';
import CartHeader from '../CartHeader/CartHeader';
import CartItemsList from '../CartItemsList/CartItemsList';

function Cart() {
    const [showCheckout, setShowCheckout] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [emailValidation, setEmailValidation] = useState();
    const { itemList,
        quantity,
        getTotal,
        userInfo,
        onNameChange,
        onEmailChange,
        onPhoneChange,
        generateOrder,
        fieldsCompleted } = useCartContext();

    function onEmailValidationChange(event) {
        setEmailValidation(event.target.value);
    };

    useEffect(() => {
        setIsEmailValid(userInfo.email === emailValidation);
    }, [emailValidation]);

    return <>
        {quantity() > 0 && <div className="row w-100">
            <div className="col-lg-12 col-md-12 col-12">
                <CartHeader quantity={quantity()} />

                <CartItemsList itemList = {itemList}/>
                <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>{`$` + getTotal()}</h1>
                </div>
            </div>
        </div>}

        {showCheckout && <UserInfo
            userInfo={userInfo}
            onNameChange={onNameChange}
            onEmailChange={onEmailChange}
            onPhoneChange={onPhoneChange}
            isEmailValid={isEmailValid}
            emailValidation={emailValidation}
            onEmailValidationChange={onEmailValidationChange} />}
        {showCheckout && fieldsCompleted() && isEmailValid &&
            <Link to={`/postSale`}>
                <Button size="lg" onClick={() => { generateOrder() }}>Purchase!
            </Button>
            </Link>}

        {quantity() === 0 &&
            <div className="alert alert-danger" role="alert">
                You have 0 items in your cart.
                <br />
                <NavLink to='/' className="alert-link">Press here to continue shopping.</NavLink>
            </div>}

        {quantity() > 0 && !showCheckout &&
            <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                    <Button onClick={() => { setShowCheckout(true) }}>Checkout</Button>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                    <Link to='/'>
                        <i className="fas fa-arrow-left mr-2"></i> Continue Shopping</Link>
                </div>
            </div>}
    </>
};

export default Cart;