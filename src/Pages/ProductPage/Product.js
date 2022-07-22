import './ProductPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, name, img, price, quantity, supplier, description } = product;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }

    return (
        <div class='product'>
            <img className='w-100' src={img} alt="" />
            <h4> {name}</h4>
            <p>Starting from ${price}</p>
            <p>Quantity: {quantity} <br /> Supplier name: {supplier}</p>
            <p class='description'><small>{description}</small></p>
            <button onClick={() => navigateToProductDetail(_id)} class='update-btn'>Update: {name}</button>

        </div>
    );
};

export default Product;