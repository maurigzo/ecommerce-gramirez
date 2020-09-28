import React, { useState, useEffect } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import UserInfo from '../UserInfo/UserInfo';

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
                <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                <p className="mb-5 text-center">
                    <i className="text-info font-weight-bold">{quantity()}</i> items in your cart</p>

                <table id="shoppingCart" className="table table-condensed table-responsive">
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
                            <tr key={i.id}>
                                <td data-th="Product">
                                    <div className="row">
                                        <div className="col-md-3 text-left">
                                            <img src={i.image} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow " />
                                        </div>
                                        <div className="col-md-9 text-left mt-sm-2">
                                            <h4>{i.title}</h4>
                                        </div>
                                    </div>
                                </td>
                                <td data-th="Price">{`$${i.price}`}</td>
                                <td data-th="Quantity">
                                    <p>{i.amount}</p>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
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