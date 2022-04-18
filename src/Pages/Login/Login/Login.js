import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css'
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate();
    const location = useLocation();
    const errorMessage = <p className='text-danger text-center'>{error?.message}</p>
    let from = location?.state?.from?.pathname || "/";
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    const handleLogin = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password);

    }
    const resetPassword = async () => {
        const email = emailRef.current.value
        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent Mail");
        }
        if (!email) {
            toast("Please Enter A Valid Email");
        }
    }
    return (
        <div className='container my-4'>
            <div className="row">

                <Form onSubmit={handleLogin} className='col-10 col-md-6 mx-auto special p-3'>
                    <h2 className='text-center my-3'>Please Login</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">

                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    {errorMessage}
                    <Button className='w-50 mx-auto d-block' variant="dark" type="submit">
                        Login
                    </Button>
                    <p className='mt-3'>New To Sal Accounting? <Link to='/register' className='text-success text-decoration-none' >Please Register!</Link></p>
                    <p className='mt-3'>Forget Password? <button className='text-success text-decoration-none btn btn-link' onClick={resetPassword}>Reset Password!</button></p>
                    <ToastContainer />
                    <SocialLogin></SocialLogin>
                </Form>

            </div>
        </div>
    );
};

export default Login;