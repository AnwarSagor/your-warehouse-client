import './ProductPage.css';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        // const url = "products.json";
        const url = `http://localhost:5000/product/${productId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])


    return (
        <div >
            <div class='product' className='text-center'>
                <img className='w-50' src={product.img} alt="" />
                <h4> {product.name}</h4>
                <p>{product.price}</p>
                <p class='description' className='text-center'>{product.description}</p>

            </div>
            <div className='text-center'>
                <Link to="/productCheckout">
                    <button className='checkout-btn'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;