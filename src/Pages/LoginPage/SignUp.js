import './LoginPage.css';
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../SharedPage/Loading';
import SocialLogin from './SocialLogin';

const SignUp = () => {
    const [agree, setAgree] = useState(false);
    const [passwordError, setPasswordError] = useState('')

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateSignIn = () => {
        navigate('/signIn');
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        console.log('user', user);
    }

    const handleSignUp = async event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        const agree = event.target.terms.checked;

        if (password !== confirmPassword) {
            setPasswordError('Passwords do not match')
            return;
        };

        await createUserWithEmailAndPassword(email, password, confirmPassword);
        await updateProfile({ displayName: name });
        navigate('/home');

    }

    return (
        <div className='container register-form'>
            <h2 class='sign-up-title'>Please Sign-up</h2>
            <form onSubmit={handleSignUp}>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="password" placeholder='Password' required />
                <input type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept the  Terms and Conditions of Your Warehouse</label>
                <p className='text-danger'>{passwordError}</p>

                <input
                    disabled={!agree}
                    id='sign-up-btn'
                    type="submit"
                    value="Sign-up" />
            </form>
            <p>Already have an account? <Link to="/signIn" className='text-primary pe-auto text-decoration-none' onClick={navigateSignIn}>Please Sign-in</Link> </p>

            <SocialLogin></SocialLogin>
        </div>

    );
};

export default SignUp;