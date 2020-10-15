import React, { useState } from 'react';
import './ItemDetail.css';
import { Row, Col, Button } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail({ item, addItem }) {
    const [amount, setAmount] = useState();

    return <>
        <Row>
            <Col>
                <h1 className="page-header">{item.title}</h1>
            </Col>
        </Row>
        <Row>
            <Col md={{ span: 8 }}>
                <img className="img-responsive img-rounded" src={item.image} alt="" style={{height:256, width: 256}}/>
            </Col>
            <Col md={{ span: 4 }} >
                <h3>Description</h3>
                <p>{item.description}</p>
                <h1>{`$ ${item.price}`}</h1>
                
                <ItemCount initial={item.initial} min={item.min} max={item.max} showAmount={setAmount} />
                <br />
                <Link to={`/cart`}>
                    <Button id="purchaseButton" size="lg" onClick={() => { addItem(item.id, amount) }}> {`Purchase ${amount}!`} </Button>
                </Link>
            </Col>
        </Row>
    </>
};

export default ItemDetail;