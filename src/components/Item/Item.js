import React from 'react';
import { ListGroup, Row, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Item({ itemId, title, description, price, image}) {

    return <ListGroup.Item as="li">
        <img className="img-responsive img-rounded" src={image} alt="" id="itemImage" />
        <Row>
            <Col md={{ span: 2, offset: 4 }}>
                <h3 className="list-group-item-heading" style={{ color: 'black' }}>
                    <Link to={`/item/${itemId}`} >{title}</Link>
                </h3>
            </Col>
            <Col md={{ span: 2, offset: 4 }}>
                <h4><Badge variant="secondary" style={{ background: 'rgba(0,145,0,1)' }}>${`${price}`}</Badge></h4>
            </Col>
        </Row>
        <Row>
            <p className="list-group-item-text lead" style={{ color: 'black' }}>
                {description}
            </p>
        </Row>
    </ListGroup.Item>
}

export default Item