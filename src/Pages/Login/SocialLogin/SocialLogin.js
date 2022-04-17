import React from 'react';
import google from '../../../images/social/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    if (user) {
        navigate('/home');
    }
    return (
        <div>

            <div className='d-flex align-items-center px-3'>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
                <p className='fw-bolder mt-2 px-3'>OR</p>
                <div style={{ height: "2px" }} className='bg-secondary w-50 opacity-50'></div>
            </div>
            <div>
                <button onClick={() => signInWithGoogle()}
                    className='btn btn-dark w-50 d-block mx-auto my-2'>
                    <img src={google} alt="" />
                    <span className='px-2 fw-bold'>Google Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;