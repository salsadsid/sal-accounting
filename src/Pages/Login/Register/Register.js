import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-dark mt-3'>Please Register</h2>
            <Form onSubmit={handleLogin} className='w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={nameRef} type="text" placeholder="Your Name" />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block' variant="dark" type="submit">
                    Register
                </Button>
                <p className='mt-3'>Already an account? <Link to='/login' className='text-success text-decoration-none' >Please Login!</Link></p>
            </Form>
        </div>
    );
};

export default Register;