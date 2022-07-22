import './ProductPage.css';
import React, { useEffect, useState } from 'react';
import Product from './Product'
import { useNavigate } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate()
    useEffect(() => {
        // fetch('products.json')
        fetch('https://infinite-badlands-56898.herokuapp.com/product')

            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div id='products' className='container'>
            <h2 class='products-title'> Products</h2>
            <div class='products-container'>

                {
                    products.map(product =>
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>)
                }
            </div>
            <div className='text-center'>
                <button id='manage-btn' onClick={() => navigate("/manageProducts")}>Manage Products</button>
            </div>
        </div>
    );
};

export default Products;