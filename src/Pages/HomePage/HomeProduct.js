import React from 'react';

const HomeProduct = ({ product }) => {
    const { name, img, description, price } = product;


    return (
        <div class='product'>
            <img className='w-100' src={img} alt="" />
            <h4> {name}</h4>
            <p>Starting from ${price}</p>
            <p class='description'><small>{description}</small></p>
        </div>

    );
};

export default HomeProduct;