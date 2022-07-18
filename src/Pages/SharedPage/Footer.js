import React from 'react';
import './SharedPage.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <footer className='footer text-center mt-4'>
            <p><small>Copyright © {year} </small></p>

        </footer>
    );
};

export default Footer;