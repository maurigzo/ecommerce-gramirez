import React from 'react';
import { Form, Col } from 'react-bootstrap';

function UserInfo({ userInfo, onNameChange, onEmailChange, onPhoneChange, emailValidation, isEmailValid,onEmailValidationChange }) {


    return <Form>
        <Form.Row>
            <Form.Group as={Col}>
                <Form.Label>Type your full name</Form.Label>
                <Form.Control placeholder="Juan Lopez" value={userInfo.name} onChange={onNameChange} />
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Type your phone</Form.Label>
                <Form.Control placeholder="Phone" value={userInfo.phone} onChange={onPhoneChange} />
            </Form.Group>
        </Form.Row>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Type your email</Form.Label>
                <Form.Control type="email" placeholder="email" value={userInfo.email} onChange={onEmailChange} />
            </Form.Group>
            <Form.Group as={Col} >
                <Form.Label>Retype your email</Form.Label>
                <Form.Control
                    className={emailValidation !== undefined && 
                        (isEmailValid ? 'form-control is-valid' : 'form-control is-invalid')}
                    type="email" placeholder="email"
                    value={emailValidation}
                    onChange={onEmailValidationChange}
                    id="emailValidation" required/>
                {!isEmailValid &&
                    <Form.Text className="invalid-feedback" htmlFor="emailValidation">
                        The typed email, doesn't match.
                </Form.Text>}
            </Form.Group>
        </Form.Row>
    </Form>
}

export default UserInfo;