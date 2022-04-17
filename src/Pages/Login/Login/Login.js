import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()
    if (user) {
        navigate('/home');
    }
    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='w-50 mx-auto'>
            <h2 className='text-center text-dark mt-3'>Please Login</h2>
            <Form onSubmit={handleLogin} className='w-100'>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='w-50 mx-auto d-block' variant="dark" type="submit">
                    Login
                </Button>
                <p className='mt-3'>New To Sal Accounting? <Link to='/register' className='text-success text-decoration-none' >Please Register!</Link></p>
            </Form>
        </div>
    );
};

export default Login;