import React, { useState, useEffect } from 'react';
import { InputGroup, Form } from 'react-bootstrap';
import ItemAmountButton from '../../components/ItemAmountButton/ItemAmountButton';

function ItemCount({ initial, min, max, showAmount }) {
    const [amount, setAmount] = useState(initial);

    function addItem() {
        amount < max && setAmount(amount +1);
    };

    function subsItem() {
        amount > min && setAmount(amount -1);
    };

    useEffect(() => {
        showAmount(amount);
    }, [amount]);

    useEffect(() => {
        setAmount(initial);
    }, [initial]);

    return <div className="form-row justify-content-center" >
        <div className="form-group col-md-4">
            <InputGroup>
                <ItemAmountButton amount={amount} min={min} text="-" background="red" operation={subsItem} />
                <Form.Control type="text" placeholder={amount} readOnly style={{ textAlign: 'center', borderRadius: 6, width: '30px' }} />
                <ItemAmountButton amount={amount} max={max} text="+" background="green" operation={addItem} />
            </InputGroup >
        </div>
    </div>
}

export default ItemCount;