import React from 'react';
import { Button } from 'react-bootstrap';

function ItemAmountButton({ amount, min, max, background, text, operation }) {

    return <>
    <Button as="input" type="button" value={text}
        disabled={amount === min || amount === max}
        style={{ color: 'white', background: background, width:40, textAlign: 'center'}}
        onClick={() => operation()}>
    </Button>
    </>
}

export default ItemAmountButton