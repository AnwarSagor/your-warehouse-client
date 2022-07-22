import './LoginPage.css'
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './LoginPage.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading';
import SocialLogin from './SocialLogin';

const SignIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
    }
    const navigateSignUp = event => {
        navigate('/sign-up')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div className='container sign-in-form'>
            <h2 className='sign-in-title text-center mt-2'>Please Sign-in</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='sign-in-btn' variant="w-50 mx-auto d-block mb-2" type="submit">
                    Sign-in
                </Button>
            </Form>
            {errorElement}
            <p>New to Your Warehouse? <Link to="/signUp" onClick={navigateSignUp} className='text-primary pe-auto text-decoration-none'>Please Sign-up</Link></p>
            <p>Forgat Password? <button onClick={resetPassword} className='btn btn-link text-primary pe-auto text-decoration-none'>Reset Password</button></p>

            <SocialLogin></SocialLogin>

            <ToastContainer />
        </div>
    );
};

export default SignIn;