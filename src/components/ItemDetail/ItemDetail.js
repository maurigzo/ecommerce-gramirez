import React, { useState } from 'react';
import './ItemDetail.css';
import { Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({ id, title, description, price, image, initial, min, max, addItem }) {
    const [amount, setAmount] = useState();

    return <>
        <Row>
            <Col>
                <h1 className="page-header">{title}</h1>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 8 }}>
                <img className="img-responsive" src={image} alt="" />
            </Col>
            <Col md={{ span: 4 }} >
                <h3>Description</h3>
                <p>{description}</p>
                <h1>{`$ ${price}`}</h1>
                
                <ItemCount initial={initial} min={min} max={max} showAmount={setAmount} />
                <br />
                <Link to={`/cart`}>
                    <Button id="purchaseButton" size="lg" onClick={() => { addItem(id, amount) }}> {`Purchase ${amount}!`} </Button>
                </Link>
            </Col>
        </Row>
    </>
};

export default ItemDetail;