import React from 'react';
import { Navbar, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import cartIcon from '../../assets/CartIcon.svg';
import CartIcon from '../../components/CartIcon/CartIcon';
import './NavBar.css'
import { NavLink, Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

const navBarStyle = {
    color: "white",
    textAlign: "center"
}

function NavBar({ appName, categories }) {

    const { quantity } = useCartContext();

    return <Navbar id="navbar">
        <Col md="2">
            <Button variant="outline-dark"><NavLink style={{ color: 'white' }} to='/' >Home</NavLink></Button>
        </Col>
        <Col md="2">
            <DropdownButton alignRight title="Categories" id="dropdown-menu-align-right" >
            <Dropdown.Item><Link to={`/category/${'A'}`}> Category A</Link></Dropdown.Item>
            <Dropdown.Item><Link to={`/category/${'B'}`}> Category B</Link></Dropdown.Item>
            </DropdownButton>
        </Col>
        <Col md="4">
            <Navbar.Brand style={navBarStyle}> {appName} </Navbar.Brand>
        </Col>
        <Col md="2"></Col>
        <Col md='1' style={{ textAlign: 'right' }}>
            <CartIcon cartIcon={cartIcon} />
        </Col>
        <Col md="1">
            <p style={{ color: 'white', textAlign: 'left' }}>{quantity()}</p>
        </Col>
    </Navbar >
};

export default NavBar;
