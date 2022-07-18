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
        <div className='text-center'>
            <h2 className='text-center'>Detail about product: {product.name}</h2>

            <div className='text-center'>
                <Link to="/productCheckout">
                    <button className='checkout-btn'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductDetail;