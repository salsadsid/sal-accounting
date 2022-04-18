import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const nameRef = useRef('')
    const navigate = useNavigate()
    const errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const handleRegister = async event => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value
        await createUserWithEmailAndPassword(email, password)
        console.log(name);
    }
    return (
        <div className='container my-4'>
            <div className="row">

                <Form onSubmit={handleRegister} className='col-10 col-md-6 mx-auto special p-3'>
                    <h2 className='text-center text-dark my-3'>Please Register</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorMessage}
                    <Button className='w-50 mx-auto d-block' variant="dark" type="submit">
                        Register
                    </Button>
                    <p className='mt-3'>Already an account? <Link to='/login' className='text-success text-decoration-none' >Please Login!</Link></p>
                    <SocialLogin></SocialLogin>
                </Form>
            </div>
        </div>
    );
};

export default Register;