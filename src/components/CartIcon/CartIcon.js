import React from 'react';
import { NavLink } from 'react-router-dom';

function CartIcon({ cartIcon }) {

    return <NavLink to='/cart'>
        <img
            src={cartIcon}
            width="30"
            height="30"
            alt="Cart logo"
        />
    </NavLink>
};

export default CartIcon;